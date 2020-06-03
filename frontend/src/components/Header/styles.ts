import styled from 'styled-components';

export const Container = styled.header`
  margin: 48px 0 0;
  width: 100%;

  @media (max-width: 900px) {
    margin: 48px auto 0;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Back = styled.button`
  display: flex;
  align-items: center;
  border: 0;

  a {
    text-decoration: none;
    font-size: 18px;
    color: #322153;
    font-weight: bold;
  }

  svg {
    margin-right: 16px;
  }
`;
