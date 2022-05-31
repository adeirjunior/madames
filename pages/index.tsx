import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { client } from '../lib/client';
import { HeroBanner, Product, SearchBar, Grid } from '../components';
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


`;

const Home: NextPage = ({ products, banner }: any) => {
  const { setCategory }: any = useStateContext();

  return (
    <Style>
      <Head>
        <title>Madames</title>
        <meta name="description" content="M'adames é uma loja dedicada a venda de produtos focados a vida íntima feminina" />
      </Head>
      <HeroBanner banner={banner[0]} />
      <SearchBar />
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