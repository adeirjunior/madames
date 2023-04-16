import styled from "styled-components";
import { DivProp } from "./StyledComponents";

const Style = styled(DivProp)`
background-color: red;
`;

const FooterBanner = () => {
  return (
    <Style>
      FooterBanner
    </Style>
  )
}

export default FooterBanner;