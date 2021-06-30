import styled, { css } from 'styled-components';

import logo from '../assets/logo.svg';

const Div = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(7px);

  ${(props) =>
    props.isActive &&
    css`
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.24);
    `}
`;

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: auto;
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.a`
  text-decoration: none;
  color: black;
  font: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
  }

  h1 {
    font-size: 24px;
    font-weight: 400;
    margin-left: 12px;
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: #9ca1a5;
  font: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    margin-left: 4px;
  }

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

  @media (max-width: 640px) {
    .text {
      display: none;
    }
  }
`;

const Header = (props) => {
  return (
    <Div isActive={props.isActive}>
      <Container>
        <Title
          href="https://shashiirk.github.io/social-tags"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logo} alt="logo" />
          <h1>Social Tags</h1>
        </Title>
        <Anchor
          href="https://github.com/shashiirk/social-tags"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-github"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
          <span className="text">GitHub</span>
        </Anchor>
      </Container>
    </Div>
  );
};

export default Header;
