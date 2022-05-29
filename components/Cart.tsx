import styled from "styled-components";
import type { FC } from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { useStateContext } from "../global/context/StateContext";
import Div from "./StyledDivComponent";

const Style = styled(Div)`
width: 100%;
height: 100vh;
position: fixed;
display: block;
top: 0;
filter: ${props => props.active ? 'opacity(1)' : 'opacity(0)'};
transition: filter .2s, right .3s ease;
right: ${props => props.active ? 0 : "-100%"};
background-color: #fff;
z-index: 99999999999;

.heading {
  padding: .75em .75em;
}

@media only screen and (min-width: 425px) {
  max-width: 425px;
  border-left: 2px solid #24113e;
}
`;
const Background = styled(Div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: ${props => props.active ? 'block' : 'none'};
  opacity: ${props => props.active ? 1 : 0};
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255, .8);
  z-index: 2100000000;
`;

const Cart: FC = () => {

  const { setShowCart, showCart }: any = useStateContext();

  return (
    <>
    <Style active={showCart}>
      <div className="heading">
        <div onClick={() => setShowCart(false)} className="left-arrow">
          <BsArrowLeft />
        </div>
      </div>
      
    </Style>
    <Background active={showCart}/>
    </>
    
  )
}

export default Cart;