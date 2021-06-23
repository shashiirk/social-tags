import styled from 'styled-components';

const Div = styled.div`
  /* border-top: 1px #e0e2e8 solid; */
  color: #696969;
  padding: 20px;
  text-align: center;

  a {
    color: inherit;
    text-decoration: none;

    @media (hover: hover) {
      & {
        transition: height 200ms ease-in;
      }

      &:hover {
      }
    }

    @media (hover: none) {
      &:active {
        color: #6688ea;
      }
    }
  }
`;

const Footer = () => {
  return (
    <Div>
      <p>
        Built by{' '}
        <a
          href="https://shashiirk.github.io/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Shashikanth
        </a>
      </p>
    </Div>
  );
};

export default Footer;
