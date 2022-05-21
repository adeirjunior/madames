import styled from "styled-components";
import { BsInstagram } from "react-icons/bs";

const Style = styled.div`
  background-color: #fff;
`;

function Footer() {
  return (
    <Style>

      <a target="_blank" href="https://www.instagram.com/_m_adames/">
        
        <BsInstagram />
      </a>
    </Style>
  )
}

export default Footer;