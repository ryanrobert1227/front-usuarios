import styled, { css } from "styled-components";

export const FormStyle = styled.div(() => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    width: 100vw;
    height: 100vh;

    .form {
      display: flex;
      flex-direction: column;
      gap: 30px;

      height: fit-content;
      width: 25vw;

      div {
        position: relative;

        display: flex;
        flex-direction: column;
        gap: 10px;

        label {
          font-family: sans-serif;
          font-size: 1em;
        }

        input {
          outline: unset;
          border: none;

          height: 7vh;
          width: 100%;
          padding: 20px;

          font-size: 1em;

          background-color: rgba(0, 0, 0, 0.1);
          color: rgba(0, 0, 0, 0.8);
        }

        .input-error {
          border: solid 2px #ff0000;
        }

        span {
          position: absolute;
          left: 5px;
          bottom: -20px;

          font-family: sans-serif;
          font-size: 0.8em;

          color: #ff0000;

          z-index: 1;
        }
      }

      button {
        border: none;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8),
          2px 2px 4px rgba(0, 0, 0, 0.4), 2px 2px 8px rgba(0, 0, 0, 0.2),
          2px 2px 16px rgba(0, 0, 0, 0.1);

        height: 5vh;
        width: 30%;

        color: white;
        background-color: rgba(0, 0, 0, 0.4);

        opacity: 0.8;

        &:hover {
          opacity: 1;
        }

        &:active {
          background-color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  `;
});
