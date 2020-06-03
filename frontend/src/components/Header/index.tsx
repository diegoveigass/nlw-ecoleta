import React from 'react';

import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import { Container, Back } from './styles';

interface HeaderProps {
  title?: string;
  icon?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, icon: Icon }) => {
  return (
    <Container>
      <img src={logoImg} alt="Ecoleta" />
      <Back>
        {Icon && <FiChevronLeft size={20} color="#34cb79" />}
        {title && <Link to="/">{title}</Link>}
      </Back>
    </Container>
  );
};

export default Header;
