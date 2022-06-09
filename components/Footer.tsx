import styled from "styled-components";
import { BsInstagram } from "react-icons/bs";
import Div from "./StyledDivComponent";

const Style = styled(Div)`
  background-color: #fff;
  display: flex;
  padding: 4em 1em;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: .65rem;
  }
  a svg {
    width: 20px;
    height: auto;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Style>
      <p>M&apos;adames &copy; {year}</p>
      <a target="instagram" href="https://www.instagram.com/_m_adames/">
        <BsInstagram />
      </a>
    </Style>
  )
}

export default Footer;