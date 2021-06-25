import styled from 'styled-components';

const Div = styled.div`
  /* border: 1px red solid; */
  border-right: 1px #d8dbdd solid;
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;

  form {
    width: 100%;

    h2 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .form-control {
      margin-bottom: 16px;

      label {
        display: block;
        font-weight: 500;
        margin-bottom: 4px;
      }

      input {
        display: block;
        font: inherit;
        width: 100%;
        padding: 10px 14px;
        border: 1px #d8dbdd solid;
        border-radius: 8px;
        outline: none;
        transition: border-color 200ms ease-in;

        &:focus {
          border-color: #1262f8;
        }

        &::placeholder {
          color: #9ca1a5;
        }
      }

      button {
        font: inherit;
        border-radius: 8px;
        border: none;
        padding: 10px 20px;
        background-color: #1262f8;
        color: white;
        cursor: pointer;
        margin-top: 8px;

        @media (hover: hover) {
          & {
            transition: background-color 200ms ease-in;
          }

          &:hover {
            background-color: #064dd1;
          }
        }

        @media (hover: none) {
          &:active {
            background-color: #064dd1;
          }
        }
      }
    }
  }
`;

const Form = () => {
  return (
    <Div>
      <form>
        <h2>Fill in the details</h2>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" placeholder="Your website's title" />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Your website's description"
          />
        </div>
        <div className="form-control">
          <label htmlFor="website">Website URL</label>
          <input type="text" id="website" placeholder="Your website's URL" />
        </div>
        <div className="form-control">
          <label htmlFor="image">Image URL</label>
          <input type="text" id="image" placeholder="Your image URL" />
        </div>
        <div className="form-control">
          <button type="submit">Generate</button>
        </div>
      </form>
    </Div>
  );
};

export default Form;
