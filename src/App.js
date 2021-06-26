import { useState } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Form from './components/Form';
import Board from './components/Board';
import Footer from './components/Footer';

const Container = styled.div`
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

const defaultDetails = {
  title: '',
  description: '',
  websiteURL: '',
  imageURL: '',
};

function App() {
  const [details, setDetails] = useState(defaultDetails);

  const setDetailsHandler = (value) => {
    setDetails(value);
  };

  return (
    <div className="app">
      <Header />
      <Container>
        <Div>
          <Form onSubmit={setDetailsHandler} />
          <Board details={details} />
        </Div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
