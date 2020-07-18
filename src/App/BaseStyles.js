import { createGlobalStyle } from 'styled-components';

import { color, font } from '../shared/utils/Styles';

export default createGlobalStyle`
  html, body, #root {
    height: auto;
    min-height: 100%;
    min-width: 768px;
    width: 100vw;
    overflow: visible
  }

  body {
    color: ${color.textHeading};
    background-color: ${color.backgroundLightPrimary};
    -webkit-tap-highlight-color: transparent;
    line-height: 1.2;
    ${font.size(16)}
    ${font.regular}
  }

  #root {
    display: flex;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  ul, li, ol, dd, h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
  }

  h1 {
    ${color.textHeading}
    ${font.bold}
  }

  h2, h3, h4, h5, h6, strong{
      ${font.medium}
      ${color.textSubHeading}
  }

  button {
    background: none;
    border: none;
  }

  /* Workaround for IE11 focus highlighting for select elements */
  select::-ms-value {
    background: none;
    color: #42413d;
  }

  [role="button"], button, input, select, textarea {
    outline: none;
    &:focus {
      outline: solid 0.5px ${color.buttonPurple};
      box-shadow: 0 0 3px rgba(155, 110, 255, 0.3);
    }
    &:disabled {
      opacity: 1;
    }
  }
  [role="button"], button, input, textarea {
    appearance: none;
  }
  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  select::-ms-expand {
    display: none;
  }
  select option {
    color: ${color.textTitle};
  }

  input {
    background-color: ${color.backgroundLightPrimary};
    color: ${color.textSubHeading};
    box-shadow: inset 0px 0px 3px rgba(238, 238, 238, 0.2);
  }

  ::placeholder {
    color: ${color.textParagraph};
  }

  textarea {
    background-color: ${color.backgroundLightPrimary};
    color: ${color.textSubHeading};
    box-shadow: inset 0px 0px 3px rgba(238, 238, 238, 0.2);
  }

  ::placeholder {
    color: ${color.textParagraph};
  }

  p {
    line-height: 1.4285;
  }

  textarea {
    line-height: 1.4285;
  }

  body, select {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    touch-action: manipulation;
  }
`;
