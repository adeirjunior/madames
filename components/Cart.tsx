import styled from "styled-components";
import type { FC } from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { useStateContext } from "../global/context/StateContext";

const Style = styled.div`
width: 100%;
height: 100vh;
position: fixed;
display: block;
top: 0;
right: 0;
background-color: #fff;
z-index: 99999999999;

.heading {
  padding: .75em .75em;
}

@media only screen and (min-width: 425px) {
  max-width: 425px;
  border-left: 2px solid #24113E;
}
`;
const Background: any = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: block;
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255, .8);
  z-index: 2100000000;
`;

const Cart: FC = () => {

  const { setShowCart, showCart }: any = useStateContext();

  return (
    <>
    <Style>
      <div className="heading">
        <div onClick={() => setShowCart(false)} className="left-arrow">
          <BsArrowLeft />
        </div>
      </div>
      
    </Style>
    <Background />
    </>
    
  )
}

export default Cart;