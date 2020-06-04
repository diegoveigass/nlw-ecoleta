import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { Map } from 'react-leaflet';

interface ListProps {
  selected?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

export const Form = styled.form`
  margin: 80px auto;
  padding: 64px;
  max-width: 730px;
  background: #fff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    display: block;
    flex-direction: row;
  }

  h1 {
    font-size: 36px;
  }

  fieldset {
    margin-top: 64px;
    min-inline-size: auto;
    border: 0;

    @media (max-width: 900px) {
      align-items: center;
      text-align: center;
    }

    legend {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;

      @media (max-width: 900px) {
        align-items: center;
        text-align: center;
        display: block;
      }

      h2 {
        font-size: 24px;
        @media (max-width: 900px) {
          align-items: center;
          text-align: center;
        }
      }

      span {
        font-size: 14px;
        font-weight: normal;
        color: #6c6c80;
      }
    }
  }

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
    width: 550px;
    display: block;
  }
`;

export const Field = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  label {
    font-size: 14px;
    margin-bottom: 8px;
  }

  input {
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;

    &::placeholder {
      color: #a0a0b2;
    }
  }

  select {
    -web-moz-appearance: none;
    -moz-appearance: none;
    appearance: none;
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
    border: none;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 900px) {
    display: block;
  }

  div + div {
    margin-left: 16px;

    @media (max-width: 900px) {
      margin-left: 0;
    }
  }
`;

export const ListItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const List = styled.li<ListProps>`
  background: #f5f5f5;
  border: 2px solid #f5f5f5;
  border-radius: 8px;
  height: 180px;
  padding: 32px 24px 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  ${props =>
    props.selected &&
    css`
      background: #e1faec;
      border: 2px solid #34cb79;
    `}

  span {
    flex: 1;
    margin-top: 12px;

    display: flex;
    align-items: center;
    color: #6c6c80;
  }
`;

export const Button = styled.button`
  height: 56px;
  width: 260px;
  border: 0;
  border-radius: 8px;
  color: #fff;
  background: #34cb79;
  margin-top: 40px;
  font-weight: bold;
  font-size: 16px;

  align-self: flex-end;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#34cb79')};
  }
`;

export const MapContainer = styled(Map)`
  width: 100%;
  height: 350px;
  border-radius: 8px;
  margin-bottom: 24px;
`;
