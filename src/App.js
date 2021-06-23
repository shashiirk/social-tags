import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';

const Container = styled.div`
  /* border: 1px green solid; */
  flex: 1;
  max-width: 1024px;
  width: 100%;
  margin: auto;
`;

function App() {
  return (
    <div className="app">
      <Header />
      <Container></Container>
      <Footer />
    </div>
  );
}

export default App;
