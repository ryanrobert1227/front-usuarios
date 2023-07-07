import styled, { css } from "styled-components";

export const BoxStyle = styled.div(() => {
  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    height: 100vh;

    font-size: 1.5em;
    font-family: sans-serif;

    .delete {
      position: absolute;
      top: 10px;

      border: solid black 10px;

      height: 30vh;
      width: 80vw;
      margin-bottom: 20px;
      font-size: 4em;

      background-color: #ff0000;

      &:hover {
        background-color: #940101;
      }

      &:active {
        background-color: #6e0101;
      }
    }

    button {
      padding: 5px 20px;
      margin-top: 15px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      position: absolute;
      bottom: 80px;

      margin-top: 20px;

      label {
        font-size: 0.65em;
      }

      input {
        height: 0vh;
        width: 70%;
        padding: 20px;

        font-size: 0.7em;

        color: rgba(0, 0, 0, 0.8);
      }

      .input-error {
        border: solid 2px #ff0000;

        height: 0vh;
        width: 70%;
        padding: 20px;

        font-size: 0.7em;

        color: rgba(0, 0, 0, 0.8);
      }

      span {
        max-width: 200px;
        font-family: sans-serif;
        font-size: 0.5em;

        color: #ff0000;
      }
    }
  `;
});
