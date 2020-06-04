import React from 'react';

import { Link } from 'react-router-dom';
import { IconBaseProps } from 'react-icons';
import logoImg from '../../assets/logo.svg';

import { Container, Back } from './styles';

interface HeaderProps {
  title?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Header: React.FC<HeaderProps> = ({ title, icon: Icon }) => {
  return (
    <Container>
      <img src={logoImg} alt="Ecoleta" />
      <Back>
        {Icon && <Icon size={20} color="#34cb79" />}
        {title && <Link to="/">{title}</Link>}
      </Back>
    </Container>
  );
};

export default Header;
