import React, { useCallback, useState, useEffect } from 'react';
import { ScrollView, Alert } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';
import * as Location from 'expo-location';

import api from '../../services/api';

import {
  Container,
  ButtonBack,
  Title,
  Description,
  MapContainer,
  MapViewContent,
  ItemsContainer,
  ButtonItem,
  ItemTitle,
  MapMarker,
  MapMarkerImage,
  MapMakerContainer,
  MapMakerTitle,
} from './styles';

interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface Point {
  id: number;
  image: string;
  image_url: string;
  name: string;
  latitude: number;
  longitude: number;
}

interface Params {
  uf: string;
  city: string;
}

const Points: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [points, setPoints] = useState<Point[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const [initialPostion, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const navigation = useNavigation();

  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    async function loadPosition(): Promise<void> {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Opsss..',
          'Precisamos de sua permissão para obert a localização',
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const { latitude, longitude } = location.coords;

      setInitialPosition([latitude, longitude]);
    }

    loadPosition();
  }, []);

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get('points', {
        params: {
          city: routeParams.city,
          uf: routeParams.uf,
          items: selectedItems,
        },
      })
      .then(response => {
        setPoints(response.data);
      });
  }, [selectedItems, routeParams.city, routeParams.uf]);

  const handleNavigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleNavigateToDetail = useCallback(
    (id: number) => {
      navigation.navigate('Detail', { point_id: id });
    },
    [navigation],
  );

  const handleSelectItem = useCallback(
    (id: number) => {
      const alreadySelected = selectedItems.findIndex(item => item === id);

      if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter(item => item !== id);

        setSelectedItems(filteredItems);
      } else {
        setSelectedItems([...selectedItems, id]);
      }
    },
    [selectedItems],
  );

  return (
    <>
      <Container>
        <ButtonBack onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={24} color="#34cb79" />
        </ButtonBack>

        <Title>♻ Bem vindo.</Title>
        <Description>Encontre no mapa um ponto de coleta.</Description>

        <MapContainer>
          {initialPostion[0] !== 0 && (
            <MapViewContent
              initialRegion={{
                latitude: initialPostion[0],
                longitude: initialPostion[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
            >
              {points.map(point => (
                <MapMarker
                  key={String(point.id)}
                  coordinate={{
                    latitude: point.latitude,
                    longitude: point.longitude,
                  }}
                  onPress={() => handleNavigateToDetail(point.id)}
                >
                  <MapMakerContainer>
                    <MapMarkerImage
                      style={{ resizeMode: 'cover', width: 90, height: 45 }}
                      source={{ uri: point.image_url }}
                    />
                    <MapMakerTitle>{point.name}</MapMakerTitle>
                  </MapMakerContainer>
                </MapMarker>
              ))}
            </MapViewContent>
          )}
        </MapContainer>
      </Container>
      <ItemsContainer>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {items.map(item => (
            <ButtonItem
              key={String(item.id)}
              onPress={() => handleSelectItem(item.id)}
              selected={!!selectedItems.includes(item.id)}
              activeOpacity={0.6}
            >
              <SvgUri width={42} height={42} uri={item.image_url} />
              <ItemTitle>{item.title}</ItemTitle>
            </ButtonItem>
          ))}
        </ScrollView>
      </ItemsContainer>
    </>
  );
};

export default Points;
