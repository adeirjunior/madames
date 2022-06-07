import styled from "styled-components";
import { FC } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsArrowLeft, BsBagDash } from "react-icons/bs";
import { useStateContext } from "../global/context/StateContext";
import Div from "./StyledDivComponent";
import { urlFor } from "../lib/client";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";

const Style = styled(Div)`
width: 100%;
height: 100vh;
max-height: -webkit-fill-available;
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
    p {
      margin-left: 1em;
      span:last-child {
        margin-left: .75em;
      }
    }
    svg {
      width: 25px;
      height: auto;
    }
  }
}
.buy-bar {
  min-width: 100%;
  position: fixed;
  font-family: Montserrat;
  box-shadow: 0px -10px 40px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  bottom: 0;
  .buy-bar-container {
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    p {
      font-size: .7rem;
      margin-right: 1em;
      span {
        font-size: .85rem;
        font-weight: 500;
      }
    }
    button {
      background-color: #24113E;
      color: #fff;
      font-size: 1rem;
      border: none;
      padding: .5em 1em;
      border-radius: .5em;
      user-select: none;
      cursor: pointer;
    }
  }
}
.product-container {
  display: grid;
  gap: 1em;
  margin: 1em 0;
  padding-bottom: 6em;
  overflow-y: scroll;
  width: 100%;
  height: -webkit-fill-available;
  background-color: #E4E4E4;
  .product {
    display: grid;
    padding: 1em 0;
    place-content: center;
    background-color: #fff;
    grid-template-columns: repeat(2, 140px);
    .image {
      cursor: pointer;
      max-width: 175px;
      height: auto;
      user-select: none;
      padding: 1em;
    }
    .details {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      .product-variant {
        font-size: .85rem;
        font-weight: 500;
      }
      .product-name {
        font-size: 1.25rem;
      }
      .product-quantity {
        .minus, .plus {
          padding: .2em .5em;
          cursor: pointer;
        }
        .minus, .plus, .enum {
          border: black solid 1px;
        }
        .minus {
          border-right: none;
        }
        .plus {
          border-left: none;
        }
        .enum {
          padding: .2em 1.5em;
          user-select: none;
          
        }
      }
    }
  }
  
}
.empty {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  h3{
    margin-top: 1em;
    font-weight: 600;
    user-select: none;
  }
  .emptyBag {
    svg {
      width: 100px;
      height: auto;
    }
  }
}
@media only screen and (min-width: 425px) {
  max-width: 425px;
  border-left: 2px solid #24113e;
}
@media only screen and (min-width: 375px) {
  .product-container .product {
    gap: 1em;
    grid-template-columns: repeat(2, 175px);
  }
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

  
  const { setShowCart, showCart, remove, toggleCartItemQuantity, cartItems, totalPrice, totalQuantities }: any = useStateContext();

  return (
    <>
    <Style active={showCart}>
      <div className="heading-container">
        <button type="button" onClick={() => setShowCart(false)} className="heading">
          <BsArrowLeft />
          <p>
            <span>Seu Carrinho</span>
            <span>({totalQuantities} {totalQuantities === 1 ? "item" : "items"})</span>
          </p>
          
        </button>
      </div>
      { 
      cartItems.length > 0 ? 
      (
        <>
          <div className="product-container">
            {
            cartItems.map((item: any, index: any) => 
            (
              <div key={index} className="product">
                <Link href={`/shop/${item?.slug.current}`}>
                  <div onClick={() => setShowCart(false)} className="image">
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
                  <h4 className="product-price">{item?.name}</h4>
                  <h4 className="product-variant">Variação:</h4>
                  <h3 className="product-name">R${item?.price}</h3>
                  <div className="product-quantity">
                    <span className="minus" onClick={() => toggleCartItemQuantity(item?._id, 'dec')}><AiOutlineMinus /></span>
                    <span className="enum">{item?.quantity}</span>
                    <span className="plus" onClick={() => toggleCartItemQuantity(item?._id, 'inc')}><AiOutlinePlus /></span>
                  </div>
                </div>
              </div>
            ))
            }
          </div>
          <div className="buy-bar">
            <div className="buy-bar-container">
              <p>Sub-total <span>R$ {totalPrice}</span></p>
              <button>Continuar</button>
            </div>
          </div>
        </>
        
      ) : 
      (
        <div className="empty">
          <div className="emptyBag">
            <BsBagDash />
          </div>
          <h3>Vazio</h3>
        </div>
      )
      
      }
    </Style>
    <Background active={showCart}/>
    </>
    
  )
}

export default Cart;