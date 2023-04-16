import styled from "styled-components";
import Router from 'next/router';
import axios from 'axios';
import { FC } from "react";
import { BsSearch } from 'react-icons/bs';
import { DivProp } from "./StyledComponents";
import { useStateContext } from "../global/context/StateContext";
import { SearchBarProp } from "../types/interfaces";

const Styled = styled(DivProp)` 
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

const SearchBar: FC<SearchBarProp> = ({ filter }) => {

  const { setSearchResults, searchText, setSearchText }: any = useStateContext();

  const search = async (e: any) => { 
    if (e.code === 'Enter' || e.type === 'click' || e.keyCode === 13) {
      const query = searchText.split(' ').join('+');
      const {data} = await axios.get(`/api/search?q=${query}`)
      setSearchResults(data.results);
      if (Router.asPath !== '/shop' && data.results) 
        Router.push('/shop', undefined, { shallow: true })
    }
  }

    return (
        <Styled>
            <div className='search-products'>
              <input enterKeyHint='search' name="product" value={searchText} onChange={e => setSearchText(e.target.value)} onKeyDown={search} placeholder='Pesquisar...' type="search"/>
              <div className="search-icon" onClick={search}>
                <BsSearch />
              </div>
            </div>
            {filter && (<p>filter</p>)}
        </Styled>
    )
}

export default SearchBar;