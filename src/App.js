import { useState } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Form from './components/Form';
import Board from './components/Board';
import Info from './components/Info';
import Footer from './components/Footer';
import down from './assets/pointing-down.svg';

const Container = styled.div`
  /* border: 1px green solid; */
  flex: 1;
  max-width: 1024px;
  width: 100%;
  margin: auto;
  padding: 16px;
`;

const Div = styled.div`
  border: 1px #d8dbdd solid;
  border-radius: 8px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Hero = styled.h1`
  font-size: 48px;
  font-weight: 600;
  max-width: 768px;
  width: 100%;
  text-align: center;
  margin: 8px auto 42px;
  line-height: 1.4;

  img {
    width: 48px;
  }

  @media (max-width: 768px) {
    & {
      font-size: 32px;
    }

    img {
      width: 32px;
    }
  }
`;

const defaultDetails = {
  title: '',
  description: '',
  websiteURL: '',
  imageURL: '',
};

function App() {
  const [details, setDetails] = useState(defaultDetails);
  const [isScrolled, setIsScrolled] = useState(false);

  const setDetailsHandler = (value) => {
    setDetails(value);
  };

  const scrollHandler = () => {
    if (window.pageYOffset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', scrollHandler);

  return (
    <div className="app">
      <Header isActive={isScrolled} />
      <Container>
        <Hero>
          Quickly generate essential meta tags for your website now{' '}
          <img src={down} alt="hand-pointing-down" />
        </Hero>
        <Div>
          <Form onSubmit={setDetailsHandler} />
          <Board details={details} />
        </Div>
        <Info />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
