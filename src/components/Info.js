import styled from 'styled-components';

import thinking from '../assets/thinking.svg';
import test from '../assets/test.svg';

const Div = styled.div`
  max-width: 768px;
  width: 100%;
  margin: auto;
  padding: 48px 0 24px;

  section {
    h1 {
      font-size: 48px;
      font-weight: 600;
      text-align: center;
      margin: 14px 0;

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
    }

    p {
      color: #656a6e;
    }

    ul {
      list-style-type: none;
      margin-top: 16px;
      display: flex;

      li {
        margin-right: 16px;
        border-radius: 8px;
        background-color: inherit;

        a {
          display: inline-block;
          text-decoration: none;
          padding: 4px 16px;
          color: #1262f8;
        }

        @media (hover: hover) {
          & {
            transition: background-color 200ms ease-in;
          }

          &:hover {
            background-color: #e2e4e4;
          }
        }

        @media (hover: none) {
          &:active {
            background-color: #e2e4e4;
          }
        }
      }

      @media (max-width: 768px) {
        & {
          justify-content: center;
        }
      }
    }

    &:nth-child(2) {
      padding-top: 48px;
    }
  }
`;

const Info = () => {
  return (
    <Div>
      <section>
        <h1>
          What are Meta Tags <img src={thinking} alt="thinking-face" />
        </h1>
        <p>
          Meta tags contain information about the website. They determine how
          your website appears when it is shared across social platforms like
          Facebook, Twitter, LinkedIn, Pinterest etc. Social Tags is a tool you
          can use to quickly generate essential meta tags that makes your
          website even more presentable and thus boosts social media engagement.
        </p>
      </section>
      <section>
        <h1>
          Official debuggers <img src={test} alt="test-tube" />
        </h1>
        <p>
          You can use the below mentioned debuggers to preview how your website
          link is going to look when shared across their platforms. Make sure
          that you deployed your website and hosted it before trying these
          debuggers.
        </p>
        <ul>
          <li>
            <a
              href="https://developers.facebook.com/tools/debug"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://cards-dev.twitter.com/validator"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/post-inspector/inspect"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </Div>
  );
};

export default Info;
