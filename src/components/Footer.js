import styled from 'styled-components';

const Div = styled.div`
  /* border-top: 1px #e0e2e8 solid; */
  color: #9ca1a5;
  padding: 20px 16px;
  text-align: center;

  a {
    color: inherit;
    text-decoration: none;

    @media (hover: hover) {
      & {
        transition: color 200ms ease-in;
      }

      &:hover {
        color: #1262f8;
      }
    }

    @media (hover: none) {
      &:active {
        color: #1262f8;
      }
    }
  }
`;

const Footer = () => {
  return (
    <Div>
      <p>
        <a
          href="https://shashiirk.github.io/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Built by Shashikanth
        </a>
      </p>
    </Div>
  );
};

export default Footer;
