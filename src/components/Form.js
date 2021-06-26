import { useRef } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  /* border: 1px red solid; */
  border-right: 1px #d8dbdd solid;
  width: 100%;
  padding: 26px;
  display: flex;
  align-items: center;

  form {
    width: 100%;

    h2 {
      font-size: 20px;
      font-weight: 400;
      margin-bottom: 20px;
    }

    .form-control {
      margin-bottom: 16px;

      label {
        display: block;
        /* font-weight: 500; */
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
    }

    button {
      font: inherit;
      border-radius: 8px;
      border: none;
      padding: 10px 20px;
      background-color: #1262f8;
      color: white;
      cursor: pointer;
      margin-top: 14px;
      margin-bottom: 6px;

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

  @media (max-width: 768px) {
    & {
      border-right: none;
      border-bottom: 1px #d8dbdd solid;
      padding: 14px;
    }
  }
`;

const Form = (props) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const websiteRef = useRef();
  const imageRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const details = {
      title: titleRef.current.value.trim(),
      description: descriptionRef.current.value.trim(),
      websiteURL: websiteRef.current.value.trim(),
      imageURL: imageRef.current.value.trim(),
    };

    props.onSubmit(details);
  };

  return (
    <Div>
      <form onSubmit={submitFormHandler}>
        <h2>Fill in the details</h2>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Your website's title"
            ref={titleRef}
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Your website's description"
            ref={descriptionRef}
          />
        </div>
        <div className="form-control">
          <label htmlFor="website">Website URL</label>
          <input
            type="text"
            id="website"
            placeholder="Your website's URL"
            ref={websiteRef}
          />
        </div>
        <div className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            placeholder="Your image URL"
            ref={imageRef}
          />
        </div>
        <button type="submit">Generate</button>
      </form>
    </Div>
  );
};

export default Form;
