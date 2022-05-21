import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
  }
  h1, h2, h3, h4, h5{
      font-weight: 400;
      margin: 0;
  }
  a {
    color: #000;
    text-decoration: none;
  }
`;
 
export default GlobalStyle;