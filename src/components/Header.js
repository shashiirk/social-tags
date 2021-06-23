import styled from 'styled-components';

const Div = styled.div`
  /* border-bottom: 1px #e0e2e8 solid; */
  max-width: 1024px;
  width: 100%;
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background-color: #5e8de5;
  color: white;
  font: inherit;
  font-size: 14px;
  padding: 8px 14px;
  text-align: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <Div>
      <Button>View on GitHub</Button>
    </Div>
  );
};

export default Header;
