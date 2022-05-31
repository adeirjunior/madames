import styled from "styled-components";
import { BsSearch } from 'react-icons/bs';
import Div from "./StyledDivComponent";

const Styled = styled(Div)` 
display: flex;
justify-content: center;
margin: 1em 0;
  .search-products {
    border: #E4E4E4 solid 1px;
    border-radius: 9px;
    padding: .3em .8em;
    background-color: #fff;
    display: flex;
    input {
      border: none;
      font-family: Montserrat;
      outline: none;
      padding: 0 .5em;
    }
    svg {
      fill: #5D5D5D;
    }
  }
`;

const SearchBar = () => {
    return (
        <Styled>
            <div className='search-products'>
            <input placeholder='Pesquisar...' type="text"/>
            <BsSearch />
            </div>
        </Styled>
    )
}

export default SearchBar;