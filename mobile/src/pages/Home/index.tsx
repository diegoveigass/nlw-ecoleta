import React, { useCallback, useState } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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
  InputText,
} from './styles';

import logo from '../../assets/logo.png';
import backgroudImg from '../../assets/home-background.png';

const Home: React.FC = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  const handleNavigateToPoints = useCallback(() => {
    navigation.navigate('Points', {
      uf,
      city,
    });
  }, [navigation, city, uf]);

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
          <InputText
            placeholder="Digite a UF"
            value={uf}
            autoCapitalize="characters"
            maxLength={2}
            autoCorrect={false}
            onChangeText={setUf}
          />
          <InputText
            placeholder="Digite a Cidade"
            value={city}
            autoCorrect={false}
            onChangeText={setCity}
          />

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
