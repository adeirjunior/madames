import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
  body {
    background: #fff;
  }
  h1, h2, h3, h4, h5{
      font-weight: 400;
      margin: 0;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  h2, h3, h4, h5, p, a {
    font-family: 'Montserrat', sans-serif;
  }
`;
  
export default GlobalStyle;