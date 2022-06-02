import styled from "styled-components";
import { FC } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsArrowLeft } from "react-icons/bs";
import { useStateContext } from "../global/context/StateContext";
import Div from "./StyledDivComponent";
import { urlFor } from "../lib/client";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";

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

.heading-container {
  padding: .75em .75em;
  .heading {
    display: flex;
    align-items: center;
    border: none;
    background-color: #fff;
    cursor: pointer;
    svg {
      width: 25px;
      height: auto;
    }
  }
}
.product-container {
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  height: auto;
  .product {
    display: grid;
    margin-bottom: 2em;
    place-content: center;
    gap: 2em;
    grid-template-columns: repeat(2, 150px);
    .image {
      cursor: pointer;
      max-width: 200px;
      height: auto;
    }
    .details {
      display: flex;
      flex-direction: column;
    }
  }
  
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
  cursor: pointer;
  display: ${props => props.active ? 'block' : 'none'};
  opacity: ${props => props.active ? 1 : 0};
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255, .8);
  z-index: 2100000000;
`;

const Cart: FC = () => {

  
  const { setShowCart, showCart, remove, toggleCartItemQuantity, cartItems, totalPrice, totalQuantities }: any = useStateContext();

  return (
    <>
    <Style active={showCart}>
      <div className="heading-container">
        <button type="button" onClick={() => setShowCart(false)} className="heading">
          <BsArrowLeft />
          <span>Seu Carrinho</span>
          <span>({totalQuantities} items)</span>
        </button>
      </div>
      { 
      cartItems.length > 0 ? 
      (
        <>
          <div className="product-container">
            {
            cartItems.map((item: any) => 
            (
              <div className="product">
                <Link href={`/shop/${item?.slug.current}`}>
                  <div className="image">
                    <Image 
                    layout="responsive"
                    width={50}
                    sizes="75vw"
                    height={75}
                    src={urlFor(item?.image && item?.image[0].asset._ref).url()} 
                    />
                  </div>  
                </Link> 
                <div className="details">
                  <h4>{item?.name}</h4>
                  <h3>R${item?.price}</h3>
                  <div className="pruduct-quantity">
                    <span className="minus" onClick={() => toggleCartItemQuantity(item?._id, 'dec')}><AiOutlineMinus /></span>
                    <span className="enum">{item?.quantity}</span>
                    <span className="plus" onClick={() => toggleCartItemQuantity(item?._id, 'inc')}><AiOutlinePlus /></span>
                  </div>
                </div>
              </div>
            ))
            }
          </div>
          <div>
            R${totalPrice}
          </div>
        </>
        
      ) : 
      (
        <div>
          <h3>Empty</h3>
        </div>
      )
      
      }
    </Style>
    <Background active={showCart}/>
    </>
    
  )
}

export default Cart;