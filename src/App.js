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
`;

function App() {
  const [] = useState();

  return (
    <div className="app">
      <Header />
      <Container>
        <Div>
          <Form />
          <Board />
        </Div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
