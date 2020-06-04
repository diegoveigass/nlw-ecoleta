import styled, { css } from 'styled-components/native';
import MapView, { Marker } from 'react-native-maps';

interface ButtonProps {
  selected?: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 46px 20px;
`;

export const ButtonBack = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-family: 'Ubuntu_700Bold';
  font-size: 32px;
  max-width: 300px;
  color: #322153;
  margin-top: 24px;
`;

export const Description = styled.Text`
  color: #6c6c80;
  font-size: 16px;
  font-family: 'Roboto_400Regular';
  margin-top: 8px;
  line-height: 24px;
`;

export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 16px;
`;

export const MapViewContent = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapMarker = styled(Marker)`
  width: 90px;
  height: 80px;
`;

export const MapMakerContainer = styled.View`
  width: 90px;
  height: 70px;
  background-color: #34cb79;
  flex-direction: column;
  overflow: hidden;
  border-radius: 8px;
  align-items: center;
`;

export const MapMarkerImage = styled.Image``;

export const MapMakerTitle = styled.Text`
  flex: 1;
  font-family: 'Roboto_400Regular';
  color: #fff;
  font-size: 8px;
  line-height: 20px;
`;

export const ItemsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const ButtonItem = styled.TouchableOpacity<ButtonProps>`
  background-color: #fff;
  border-radius: 10px;
  padding: 16px;
  border-width: 2px;
  border-color: #eee;
  height: 120px;
  width: 120px;
  margin-right: 8px;
  align-items: center;
  justify-content: space-between;

  text-align: center;

  ${props =>
    props.selected &&
    css`
      border-color: #34cb79;
      background-color: #e1faec;
    `}
`;

export const ItemTitle = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 13px;
  text-align: center;
`;
