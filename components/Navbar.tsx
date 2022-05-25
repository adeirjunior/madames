import styled from "styled-components";
import { BsBag, BsPerson, BsArrowLeft } from "react-icons/bs";
import { useStateContext } from "../global/context/StateContext";
import Link from "next/link";
import { Cart } from "./";

const Style = styled.div`
background-color: #fff;
padding: .75em .75em;
display: flex;
align-items: center;
justify-content: space-between;
#logo {
  display: flex;
  align-items: center;
  font-family: 'Parisienne' !important;
  text-transform: capitalize;
  user-select: none;
  h1 {
    font-size: 1.25rem;
    font-weight: 500;
  }
  span {
    font-size: .7rem;
    margin-left: 1em;
  }
}
.left-arrow, #nav-options .bag-icon, #nav-options .profile-icon{
  svg {
    width: 25px;
    height: auto;
    cursor: pointer;
  }
}
#nav-options {
  display: flex;
  
  .bag-icon {
    margin-right: 1.5em;
    position: relative;

    span {
      position: absolute;
      left: 1.2em;
      text-align: center;
      border-radius: 50%;
      background-color: #fff;
      border: solid black 1px;
      width: 1.35em;
      height: 1.35em;
      text-align: center;
      font-size: .75rem;
      font-family: Montserrat;
    }
  }
}

`;

const Navbar = ({ path }: any) => {
  const { totalQuantities, showCart, setShowCart }: any = useStateContext();
  return (
    <Style>  
      { path === "/" ? 
      (
        <div id="logo">
          <h1>m'adames</h1>
          <span>perfumes</span>
        </div>
      ) : 
      (
        <div className="left-arrow" onClick={() => history.back()}>
          <BsArrowLeft />
        </div>
      )
        
      }
      { showCart && <Cart />}
      <nav id="nav-options">
        <div className="bag-icon" onClick={() => setShowCart(true)}>
          <BsBag />
          {totalQuantities > 0 && <span>{totalQuantities}</span>}
        </div>
        <span className="profile-icon">
          <Link href="/user">
            <BsPerson />
          </Link>
        </span>  
      </nav>
    </Style>
  )
}

export default Navbar;