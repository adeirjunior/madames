import styled from "styled-components";
import { BsInstagram, BsFacebook, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { DivProp } from "./StyledComponents";

const Style = styled(DivProp)`
div{
  background-color: #fff;
  display: flex;
  padding: 3em 1em;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: .65rem;
  }
  .social-medias{
    a {
    &:not(:last-child) {
      margin-right: 10px;
    }
      svg {
        width: 16px;
        height: auto;
        &:hover {
          opacity: .6;
        }
      }
    }
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
        <div className="social-medias">
          <a target="instagram" href="https://www.instagram.com/_m_adames/">
            <BsInstagram />
          </a>
          <a target="facebook" href="https://www.facebook.com/profile.php?id=100081651225007/">
          <BsFacebook />
          </a>
          <a target="whatsapp" href="https://wa.me/message/TMAKLLXZDJM2E1/">
          <BsWhatsapp />
          </a>
          <a target="youtube" href="https://youtube.com/channel/UCt0AzvZ515eGGygh26u7o6Q/">
          <BsYoutube />
          </a>
        </div>
      </div>
      <P>Site feito por <a rel="noreferrer" href="https://adeirjunior.carrd.co/" target="_blank">Adeir Junior</a></P>
    </Style>
  </>
  )
}

export default Footer;