import styled from "styled-components";
import { BsInstagram } from "react-icons/bs";
import type { FC } from "react";

const Style = styled.div`
  background-color: #fff;
`;

const Footer: FC = () => {
  return (
    <Style>

      <a target="_blank" href="https://www.instagram.com/_m_adames/">
        
        <BsInstagram />
      </a>
    </Style>
  )
}

export default Footer;