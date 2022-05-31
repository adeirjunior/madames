import styled from "styled-components";
import Div from "./StyledDivComponent";

const Style = styled(Div)`
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