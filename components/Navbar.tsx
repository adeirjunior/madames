import styled from "styled-components";
import { BsBag, BsPerson, BsArrowLeft } from "react-icons/bs";
import { useStateContext } from "../global/context/StateContext";
import Link from "next/link";

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
  h1 {
    font-size: 1.25rem;
    font-weight: 500;
  }
  span {
    font-size: .7rem;
    margin-left: 1em;
  }
}
#nav-options {
  display: flex;
  
  div {
    margin-right: 1em;
    position: relative;

    span {
      position: absolute;
      left: 1em;
      border-radius: 50%;
      background-color: #fff;
      border: solid black 1px;
      width: 1.25em;
      height: 1.25em;
      text-align: center;
      font-size: .5rem;
      font-family: Montserrat;
    }
  }
}

`;

const Navbar = ({ path }: any) => {
  const { totalQuantities, incQty }: any = useStateContext();
  console.log(path);
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

        <Link href="/">
          <BsArrowLeft />
        </Link>
      )
        
      }
      <div id="nav-options">
        <div>
          <BsBag />
          {totalQuantities > 0 && <span>{totalQuantities}</span>}
        </div>
        <span onClick={incQty}>
          <BsPerson />
        </span>
        
      </div>
    </Style>
  )
}

export default Navbar;