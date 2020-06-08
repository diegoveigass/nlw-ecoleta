import React, { useCallback, useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import {
  Container,
  Content,
  ImageHeader,
  Title,
  Description,
  Footer,
  Button,
  ButtonText,
  ButtonIconContainer,
  PickerContainer,
} from './styles';

import logo from '../../assets/logo.png';
import backgroudImg from '../../assets/home-background.png';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const Home: React.FC = () => {
  const placeholderUf = {
    label: 'Selecione a UF',
    value: null,
  };

  const placeholderCity = {
    label: 'Selecione a cidade',
    value: null,
  };

  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  const navigation = useNavigation();

  const handleNavigateToPoints = useCallback(() => {
    navigation.navigate('Points', {
      uf: selectedUf,
      city: selectedCity,
    });
  }, [navigation, selectedUf, selectedCity]);

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      )
      .then(response => {
        const ufInitials = response.data.map(uf => uf.sigla);

        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }
    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`,
      )
      .then(response => {
        const cityNames = response.data.map(city => city.nome);

        setCities(cityNames);
      });
  }, [selectedUf]);

  console.log(selectedCity, selectedUf);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <Container source={backgroudImg} imageStyle={{ width: 274, height: 368 }}>
        <Content>
          <ImageHeader source={logo} />
          <View>
            <Title>Seu marketplace de coleta de Resíduos</Title>
            <Description>
              Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
            </Description>
          </View>
        </Content>

        <Footer>
          <PickerContainer>
            <RNPickerSelect
              placeholder={placeholderUf}
              onValueChange={value => setSelectedUf(value)}
              value={selectedUf}
              items={ufs.map(uf => ({
                label: uf,
                value: uf,
              }))}
            />
          </PickerContainer>
          <PickerContainer>
            <RNPickerSelect
              placeholder={placeholderCity}
              onValueChange={value => setSelectedCity(value)}
              value={selectedCity}
              items={cities.map(city => ({
                label: city,
                value: city,
              }))}
            />
          </PickerContainer>

          <Button onPress={handleNavigateToPoints}>
            <ButtonIconContainer>
              <Icon name="arrow-right" size={24} color="#fff" />
            </ButtonIconContainer>

            <ButtonText>Entrar</ButtonText>
          </Button>
        </Footer>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Home;
