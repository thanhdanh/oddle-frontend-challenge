import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.42857143;
    color: #333;
    background-color: #fff;
    font-size: 14px;
  }
  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  #root {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  input {
    line-height: normal;
  }
  button, input, optgroup, select, textarea {
    margin: 0;
    font: inherit;
    color: inherit;
  }
  .h1, .h2, .h3, h1, h2, h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .h1, h1 {
    font-size: 36px;
  }
  .h2, h2 {
    font-size: 30px;
  }
  a {
    cursor: pointer;
  }
`;

export default GlobalStyle;