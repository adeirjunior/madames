import styled from "styled-components";
import { useState } from "react";
import Router from 'next/router';
import axios from 'axios';
import { BsSearch } from 'react-icons/bs';
import Div from "./StyledDivComponent";
import { useStateContext } from "../global/context/StateContext";

const Styled = styled(Div)` 
display: flex;
justify-content: center;
margin: 1em 0 5em;
  .search-products {
    border: #E4E4E4 solid 1px;
    border-radius: 9px;
    padding: .3em .8em;
    background-color: #fff;
    align-items: center;
    display: flex;
    input {
      border: none;
      font-family: Montserrat;
      outline: none;
      padding: 0 .5em;
    }
    .search-icon svg {
      fill: #5D5D5D;
      cursor: pointer;
    }
  }

@media only screen and (min-width: 1440px) {
  .search-products {
    border-radius: .8em;
    padding: .5em 3em ;
    input {
      font-size: 1.5rem;
      width: 700px;
    }
    .search-icon svg {
      width: 30px;
      height: auto;
    }
  }
}
`;

const SearchBar = () => {
  const [state, setState] = useState<string>('');
  const { setSearchResults }: any = useStateContext();
  const [code, setCode] = useState<string>('');
  const search = async (e: any) => { 
    if (e.code === 'Enter' || e.type === 'click' || e.keyCode === 66) {
      const query = state.split(' ').join('+');
      const data = await axios.get(`/api/search?q=${query}`)
      setSearchResults(data.data.results);
      setCode(e.code);
      console.log(e)
      if (Router.asPath !== '/shop' && data.data.results) Router.push('/shop');
    }
  }

    return (
        <Styled>
            <div className='search-products'>
              <input enterKeyHint='search' name="product" value={state} onChange={e => setState(e.target.value)} onKeyDown={search} placeholder='Pesquisar...' type="search"/>
              <div className="search-icon" onClick={search}>
                <BsSearch />
              </div>
            </div>
            {code}
        </Styled>
    )
}

export default SearchBar;