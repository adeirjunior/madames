import styled from "styled-components";
import { BsBag, BsPerson, BsArrowLeft } from "react-icons/bs";
import { useStateContext } from "../global/context/StateContext";
import Link from "next/link";
import { DivProp } from "./StyledComponents";
import { Cart } from "./";

const Style = styled(DivProp)`
background-color: #fff;
padding: .75em .75em;
min-height: 29px;
display: flex;
align-items: center;
justify-content: space-between;
#logo {
  display: flex;
  align-items: center;
  text-transform: capitalize;
  user-select: none;
  h1, span {
    font-family: 'Parisienne', cursive;
  }
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
      cursor: pointer;
      height: 1.35em;
      text-align: center;
      font-size: .75rem;
      font-family: Montserrat;
      user-select: none;
    }
  }
}
@media only screen and (min-width: 1440px) {
  #logo{
    h1 {
      font-size: 1.8rem;
    }
    span {
      font-size: 1rem;
    }
  }
}
`;

const Navbar = ({ path }: any) => {
  const { totalQuantities, setShowCart, category }: any = useStateContext();
  return (
    <Style>  
      { path === "/" ? 
      (
        <div id="logo">
          <h1>m&apos;adames</h1>
          <span>
            {category === "sexShop" && "Sex Shop"}
            {category === "langeries" && "Langeries"}
            {category === "perfumes" && "Perfumes"}
          </span>
        </div>
      ) : 
      (
        <Link href="/">
          <div className="left-arrow">
            <BsArrowLeft />
          </div>
        </Link>
      )
        
      }
      <Cart />
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