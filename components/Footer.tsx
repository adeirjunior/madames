import styled from "styled-components";
import { BsInstagram } from "react-icons/bs";
import type { FC } from "react";

const Style = styled.div`
  background-color: #fff;
  display: flex;
  padding: 1.5em 1em;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: .65rem;
  }
`;

const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <Style>
      <p>M'adames &copy; {year}</p>
      <a target="_blank" href="https://www.instagram.com/_m_adames/">
        <BsInstagram />
      </a>
    </Style>
  )
}

export default Footer;