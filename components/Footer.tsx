import styled from "styled-components";
import { BsInstagram } from "react-icons/bs";
import { DivProp } from "./StyledComponents";

const Style = styled(DivProp)`
div{
  background-color: #fff;
  display: flex;
  padding: 4em 1em 3em;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: .65rem;
  }
  a svg {
    width: 20px;
    height: auto;
  }
}
`;
const P = styled.p`

  margin-bottom: 4em; 
  text-align: center; 
  color: #AAAAAA; 
  font-size: .8rem;

  a {
    transition: .3s color;
    color: #aaaaaa;
    font-weight: 600;
    
    &:hover {
      color: #24113E;
    }
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
    <Style>
      <div>
        <p>M&apos;adames &copy; {year}</p>
        <a target="instagram" href="https://www.instagram.com/_m_adames/">
          <BsInstagram />
        </a>
      </div>
      <P>Site feito por <a rel="noreferrer" href="https://adeirjunior.carrd.co/" target="_blank">Adeir Junior</a></P>
    </Style>
  </>
  )
}

export default Footer;