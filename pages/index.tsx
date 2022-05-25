import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import { client } from '../lib/client';
import { HeroBanner, Product } from '../components';
import Grid from '../components/Grid';
import { BsSearch } from 'react-icons/bs';

const Style = styled.div`
  span{
    font-family: Montserrat;
    font-size: .7rem;
    display: flex;
    justify-content: center;
    margin: 1.5em 0 0;
  }
  .as{
    display: flex;
    justify-content: center;
    margin: 1em 0;
    .search-products {
      border: #E4E4E4 solid 1px;
      border-radius: 9px;
      padding: .3em .8em;
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

  return (
    <Style>
      <HeroBanner banner={banner[0]} />
      <div className='as'>
        <div className='search-products'>
          <input placeholder='Pesquisar...' type="text" name="" id="" />
          <BsSearch />
        </div>
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
  const query: string = '*[_type == "product"]';
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