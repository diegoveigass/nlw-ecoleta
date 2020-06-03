import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header />

        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
          </p>

          <Link to="/create-point">
            <span>
              <FiLogIn size={20} color="#fff" />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </Content>
    </Container>
  );
};

export default Home;
