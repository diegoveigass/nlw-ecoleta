import styled from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/home-background.svg';

export const Container = styled.div`
  height: 100vh;

  background: url(${backgroundImg}) no-repeat 700px bottom;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }

  main {
    flex: 1;
    max-width: 560px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 900px) {
      align-items: center;
    }

    h1 {
      font-size: 54px;
      color: #322153;

      @media (max-width: 900px) {
        font-size: 42px;
      }
    }

    p {
      font-size: 24px;
      margin-top: 24px;
      color: #6c6c80;

      @media (max-width: 900px) {
        font-size: 18px;
      }
    }

    a {
      width: 100%;
      height: 72px;
      max-width: 360px;
      background: #34cb79;
      border-radius: 8px;
      text-decoration: none;

      display: flex;
      align-items: center;
      overflow: hidden;
      margin-top: 40px;

      span {
        background: rgba(0, 0, 0, 0.08);
        width: 72px;
        height: 72px;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      strong {
        flex: 1;
        text-align: center;
        color: #fff;
      }

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#2fb86e')};
      }
    }
  }
`;
