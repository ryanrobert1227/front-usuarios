import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    position: relative;
  }

  .aviso {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 40px;
      position: absolute;
      top: 10vh;
      left: 10vw;

      border: solid 2px black;
      border-radius: 20px;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.4),
        2px 2px 8px rgba(0, 0, 0, 0.4);

      height: 80vh;
      width: 80vw;

      background-color: white;

      z-index: 3;

      h1 {
        font-family: sans-serif;
        font-size: 4em;

        color: red;
      }

      p {
        max-width: 50vw;

        font-family: sans-serif;
        font-size: 1.5em;
      }

      button {
        border: solid black 0.2px;

        padding: 15px 40px;

        background-color: rgba(0, 0, 0, 0.1);

        &:hover {
          background-color: rgba(0, 0, 0, 0.3);
        }

        &:active {
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
    }
`;
