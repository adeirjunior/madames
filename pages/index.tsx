import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { client } from '../lib/client';
import { HeroBanner, Product } from '../components';
import Grid from '../components/Grid';
import { BsSearch } from 'react-icons/bs';
import { useStateContext } from '../global/context/StateContext';

const Style = styled.div`
  span{
    font-family: Montserrat;
    font-size: .7rem;
    display: flex;
    justify-content: center;
    margin: 1.5em 0 0;
  }
  .home-categories {
    font-family: Montserrat;
    font-size: .8rem;
    display: flex;
    justify-content: center;
    margin: 2.5em 0 1.75em;
    color: #5D5D5D;
    ul {
      cursor: pointer;
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      li {
        &:hover{
          color: #24113E;
        }
        &:not(:last-child) {
          margin-right: .5em;
        }
      }
    }
  }
  .search-wrapper{
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
  }
  
`

const Home: NextPage = ({ products, banner }: any) => {
  const { setCategory }: any = useStateContext();

  return (
    <Style>
      <Head>
        <title>Madames</title>
        <meta name="description" content="M'adames é uma loja dedicada a venda de produtos focados a vida íntima feminina" />
      </Head>
      <HeroBanner banner={banner[0]} />

      <div className='search-wrapper'>
        <div className='search-products'>
          <input placeholder='Pesquisar...' type="text" name="" id="" />
          <BsSearch />
        </div>
      </div>
      <div className='home-categories'>
        <ul>
          <li onClick={() => setCategory("Perfumes")}>Perfumes</li>
          <li onClick={() => setCategory("Langeries")}>Langeries</li>
          <li onClick={() => setCategory("Sex Shop")}>Sex Shop</li>
        </ul>
      </div>
      <Grid>
        {
          products.map((product: any) => <Product key={product._id} product={product}/>)
        }
      </Grid>
      <span>carregar mais</span>
    </Style>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const query: string = `*[_type == "product"]`;
  const queryBanner: string = '*[_type == "banner"]';

  const products = await client.fetch(query);
  const banner = await client.fetch(queryBanner);
  return {
    props: {
      products,
      banner
    }
  }
} 