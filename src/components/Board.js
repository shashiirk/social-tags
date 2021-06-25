import styled from 'styled-components';

const Div = styled.div`
  /* border: 1px blue solid; */
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
  /* border: 1px grey solid; */
  font-family: monospace;
  font-size: 14px;
  flex: 1;
  overflow: auto;
  padding: 14px;

  > div {
    /* border: 1px green solid; */
    white-space: nowrap;

    .newline {
      margin-bottom: 16px;
    }

    .comment {
      color: #909194;
    }

    .tagline {
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

  p {
    .code {
      font-family: monospace;
      font-size: 16px;
    }
  }
`;

const Board = () => {
  const code = (
    <div>
      <div className="comment">
        <span className="token">&lt;!-- Primary Meta Tags --&gt;</span>
      </div>
      <div className="tagline">
        &lt;<span className="tag">title</span>&gt;
        <span className="content">Meta Tags — Preview, Edit and Generate</span>
        &lt;/<span className="tag">title</span>&gt;
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">name</span>="
        <span className="value">title</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">Meta Tags — Preview, Edit and Generate</span>
        "&gt;
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">name</span>="
        <span className="value">description</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">Meta Tags — Preview, Edit and Generate</span>
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
        <span className="value">Meta Tags — Preview, Edit and Generate</span>
        "&gt;
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">property</span>="
        <span className="value">og:title</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">Meta Tags — Preview, Edit and Generate</span>
        "&gt;
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">property</span>="
        <span className="value">og:description</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">Meta Tags — Preview, Edit and Generate</span>
        "&gt;
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">property</span>="
        <span className="value">og:image</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">Meta Tags — Preview, Edit and Generate</span>
        "&gt;
      </div>
      <div className="newline"></div>
      <div className="comment">
        <span className="token">&lt;!-- Twitter Meta Tags --&gt;</span>
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">property</span>="
        <span className="value">twitter:card</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">summary_large_image</span>
        "&gt;
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">property</span>="
        <span className="value">twitter:url</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">Meta Tags — Preview, Edit and Generate</span>
        "&gt;
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">property</span>="
        <span className="value">twitter:title</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">Meta Tags — Preview, Edit and Generate</span>
        "&gt;
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">property</span>="
        <span className="value">twitter:description</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">Meta Tags — Preview, Edit and Generate</span>
        "&gt;
      </div>
      <div className="tagline">
        &lt;<span className="tag">meta</span>{' '}
        <span className="attribute">property</span>="
        <span className="value">twitter:image</span>"{' '}
        <span className="attribute">content</span>="
        <span className="value">Meta Tags — Preview, Edit and Generate</span>
        "&gt;
      </div>
    </div>
  );

  console.log(code);

  return (
    <Div>
      <Head>
        <div></div>
        <div></div>
        <div></div>
      </Head>
      <Body>{code}</Body>
      <Foot>
        <p>
          Copy it into the <span className="code">&lt;head&gt;</span> of your
          website
        </p>
      </Foot>
    </Div>
  );
};

export default Board;
