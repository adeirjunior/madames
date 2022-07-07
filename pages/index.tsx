import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { client } from '../lib/client';
import { HeroBanner, Product, SearchBar, Grid } from '../components';
import { useStateContext } from '../global/context/StateContext';
import Div from '../components/StyledComponents';

const Style = styled(Div)`
  span{
    font-family: Montserrat;
    font-size: .7rem;
    display: flex;
    justify-content: center;
    margin: 3em 0 0;
  }
  .home-categories {
    font-family: Montserrat;
    font-size: .8rem;
    display: flex;
    justify-content: center;
    margin: 2.5em 0 1.75em;
    color: #5D5D5D;
    ul {
      
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      li {
        cursor: pointer;
        &:hover{
          color: #24113E;
        }
        &:not(:last-child) {
          margin-right: 1em;
        }
      }
    }
  }
@media only screen and (min-width: 1440px) {
  .home-categories {
    margin-bottom: 4em;
    font-size: 1.25rem;
    ul {
      li {
        &:not(:last-child) {
          margin-right: 1.5em;
        }
      }
    }
  }
}
`;

const Home: NextPage = ({ products, banner }: any) => {
  const { setCategory, category }: any = useStateContext();

  const allProducts = () => products.map((product: any) => <Product key={product._id} product={product}/>);
  const filteredProducts = () => {
    const filter = products.filter((product: any) => product.tags[0].value == category)
    return filter.map((product: any) => <Product key={product._id} product={product}/>);
  }
  return (
    <Style>
      <Head>
        <title>M&apos;adames</title>
        <meta name="description" content="M'adames é uma loja dedicada a venda de produtos focados a vida íntima feminina" />
      </Head>
      <HeroBanner banner={banner[0]} />
      <SearchBar />
      <div className='home-categories'>
        <ul>
          <li onClick={() => setCategory((prev: string) => prev === "perfumes" ? "" : "perfumes")}>Perfumes</li>
          <li onClick={() => setCategory((prev: string) => prev === "langeries" ? "" : "langeries")}>Langeries</li>
          <li onClick={() => setCategory((prev: string) => prev === "sexShop" ? "" : "sexShop")}>Sex Shop</li>
        </ul>
      </div>
      <Grid>
        {category ? filteredProducts() : allProducts()}
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