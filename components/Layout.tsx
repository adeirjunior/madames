import styled from "styled-components";
import type { ChildrenProp } from "../types/types";
import { Navbar, Footer } from "./";
import { DivProp } from "./StyledComponents";

const Style = styled(DivProp)`
background-color: #fff;
overflow: hidden;

@media only screen and (min-width: 720px) {
  main {
  padding: 0 2em;
}
}
@media only screen and (min-width: 1024px) {
  main {
  padding: 0em 5em;
}
}
@media only screen and (min-width: 1440px) {
  main {
  padding: 2em 6em;
}
}
`;



const Layout = ({ children, path }: ChildrenProp) => {
 
  return (
    <Style>
      <script crossOrigin="*" async={true} charSet="UTF-8" src="https://embed.tawk.to/629100247b967b1179919ae8/1g436h416"></script>
      <header>
        <Navbar path={path}/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </Style>
  )
}

export default Layout;