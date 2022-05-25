import styled from "styled-components";
import type { FC } from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { useStateContext } from "../global/context/StateContext";

const Style: any = styled.div`
width: 100%;
height: 100vh;
position: absolute;
display: block;
top: 0;
right: 0;
background-color: #ff5;
z-index: 1;

body{
  overflow: ${(props: any) => (props.active ? "hidden" : "auto")}; 
}
`;

const Cart: FC = () => {

  const { setShowCart, showCart }: any = useStateContext();

  return (
    <Style active={showCart}>
      <div onClick={() => setShowCart(false)} className="left-arrow">
        <BsArrowLeft />
      </div>
    </Style>
  )
}

export default Cart;