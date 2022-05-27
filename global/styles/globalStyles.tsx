import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  &::-webkit-scrollbar{
    display: none;
  }
}
  body {
    background: #fff;
  }
  h1, h2, h3, h4, h5{
    font-weight: 400;
  }
  h1,h2,h3,h4,h5,p,span,a,input {
    color: #24113E;
    text-decoration: none;
    &::selection {
      background-color: #EC478E;
      color: #fff;
    }
  }
  li, button {
    &::selection {
      background-color: #EC478E;
      color: #fff;
    }
  }
  h2, h3, h4, h5, p, a {
    font-family: 'Montserrat', sans-serif;
  }
`;
  
export default GlobalStyle;