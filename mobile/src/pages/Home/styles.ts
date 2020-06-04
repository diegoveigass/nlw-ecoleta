import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ImageBackground`
  padding: 32px;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ImageHeader = styled.Image``;

export const Title = styled.Text`
  font-family: 'Ubuntu_700Bold';
  font-size: 32px;
  max-width: 300px;
  color: #322153;
  margin-top: 64px;
`;

export const Description = styled.Text`
  color: #6c6c80;
  font-size: 16px;
  font-family: 'Roboto_400Regular';
  margin: 16px 9px;
  max-width: 300px;
  line-height: 24px;
`;

export const Footer = styled.View``;

export const Button = styled(RectButton)`
  height: 60px;
  background-color: #34cb79;
  border-radius: 10px;
  align-items: center;
  overflow: hidden;
  flex-direction: row;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-family: 'Roboto_500Medium';
  font-size: 16px;
`;

export const ButtonIconContainer = styled.View`
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const InputText = styled.TextInput`
  height: 60px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 0 24px;
  font-size: 16px;
`;
