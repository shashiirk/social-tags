import styled from 'styled-components';

const Div = styled.div`
  /* border: 1px blue solid; */
  width: 100%;
`;

const Head = styled.div`
  border-bottom: 1px #d8dbdd solid;
  padding: 14px;
  display: flex;

  div {
    height: 12px;
    width: 12px;
    border: 2px transparent solid;
    border-radius: 50%;
    margin-right: 6px;

    &:first-child {
      border-color: rgb(239, 68, 68);
    }

    &:nth-child(2) {
      border-color: rgb(251, 191, 36);
    }

    &:last-child {
      border-color: rgb(74, 222, 128);
    }
  }
`;

const Body = styled.div``;

const Foot = styled.div``;

const Board = () => {
  return (
    <Div>
      <Head>
        <div></div>
        <div></div>
        <div></div>
      </Head>
      <Body />
      <Foot />
    </Div>
  );
};

export default Board;
