import { useState } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
      border-color: #ef4444;
    }

    &:nth-child(2) {
      border-color: #ffd700;
    }

    &:last-child {
      border-color: #34da71;
    }
  }
`;

const Body = styled.div`
  font-family: monospace;
  font-size: 14px;
  flex: 1;
  overflow: auto;
  padding: 14px;

  > div {
    white-space: nowrap;
    padding-bottom: 14px;

    .newline {
      margin-bottom: 16px;
    }

    .comment {
      font-style: italic;
      color: #909194;
    }

    .tagline {
      margin-bottom: 2px;
      color: #424648;

      .tag {
        color: #f41115;
      }

      .attribute {
        color: #a007ad;
      }

      .value {
        color: #22af2e;
      }
    }
  }
`;

const Foot = styled.div`
  border-top: 1px #d8dbdd solid;
  padding: 14px;

  button {
    font: inherit;
    width: 64px;
    height: 32px;
    border-radius: 8px;
    border: 1px #1262f8 solid;
    background-color: white;
    color: #1262f8;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (hover: hover) {
      & {
        transition: background-color 200ms ease-in;
      }

      &:hover {
        background-color: #dde8fd;
      }
    }

    @media (hover: none) {
      &:active {
        background-color: #dde8fd;
      }
    }
  }

  ol {
    padding: 14px 0 0 14px;
    font-size: 14px;
    color: #656a6e;

    li {
      .code {
        font-family: monospace;
        font-size: 14px;
      }
    }
  }
`;

const actualCode = ({ title, description, websiteURL, imageURL }) => {
  return (
    <div>
      <div className="comment">
        <span className="token">&lt;!-- Primary Meta Tags --&gt;</span>
      </div>
      <div className="tagline">
        &lt;<span className="tag">title</span>&gt;
        <span className="content">{title}</span>
        &lt;/<span className="tag">title</span>&gt;
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">name</span>="
        <span className="value">title</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">{title}</span>
        "&gt;
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">name</span>="
        <span className="value">description</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">{description}</span>
        "&gt;
      </div>
      <div className="newline"></div>
      <div className="comment">
        <span className="token">&lt;!-- Facebook Meta Tags --&gt;</span>
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">property</span>="
        <span className="value">og:type</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">website</span>
        "&gt;
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">property</span>="
        <span className="value">og:url</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">{websiteURL}</span>
        "&gt;
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">property</span>="
        <span className="value">og:title</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">{title}</span>
        "&gt;
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">property</span>="
        <span className="value">og:description</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">{description}</span>
        "&gt;
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">property</span>="
        <span className="value">og:image</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">{imageURL}</span>
        "&gt;
      </div>
      <div className="newline"></div>
      <div className="comment">
        <span className="token">&lt;!-- Twitter Meta Tags --&gt;</span>
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">name</span>="
        <span className="value">twitter:card</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">summary_large_image</span>
        "&gt;
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">name</span>="
        <span className="value">twitter:url</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">{websiteURL}</span>
        "&gt;
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">name</span>="
        <span className="value">twitter:title</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">{title}</span>
        "&gt;
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">name</span>="
        <span className="value">twitter:description</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">{description}</span>
        "&gt;
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">name</span>="
        <span className="value">twitter:image</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">{imageURL}</span>
        "&gt;
      </div>
    </div>
  );
};

const copyableCode = ({ title, description, websiteURL, imageURL }) => {
  return `
  <!-- Primary Meta Tags -->
  <title>${title}</title>
  <meta name="title" content="${title}">
  <meta name="description" content="${description}">
  
  <!-- Facebook Meta Tags -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${websiteURL}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${imageURL}">
  
  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${websiteURL}">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${imageURL}">
  `;
};

const Board = (props) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyTextHandler = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const copyIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-check"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      stroke="#1262f8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );

  return (
    <Div>
      <Head>
        <div></div>
        <div></div>
        <div></div>
      </Head>
      <Body>{actualCode(props.details)}</Body>
      <Foot>
        <CopyToClipboard
          text={copyableCode(props.details)}
          onCopy={copyTextHandler}
        >
          <button>{!isCopied ? 'Copy' : copyIcon}</button>
        </CopyToClipboard>
        <ol>
          <li>
            Copy it into the <span className="code">&lt;head&gt;</span> of your
            website
          </li>
          <li>Make changes if required</li>
        </ol>
      </Foot>
    </Div>
  );
};

export default Board;
