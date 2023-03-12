import type { GetServerSideProps, NextPage } from 'next';
import styled from 'styled-components';
import { client } from '../lib/client';
import { HeroBanner, Product, SearchBar, Grid } from '../components';
import { useStateContext } from '../global/context/StateContext';
import { DivProp } from '../components/StyledComponents';
import { NextSeo } from 'next-seo';
import { productsQuery } from '../lib/queries';

const Style = styled(DivProp)`
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

  function allProducts() { return products.map((product: any) => <Product key={product._id} product={product}/>) };
  function filteredProducts() {
    const filter = products.filter((product: any) => product.tag == category)
    return filter.map((product: any) => <Product key={product._id} product={product}/>);
  }
  
  return <Style>
    <NextSeo title="Home" />
    <HeroBanner banner={banner[0]} />
    <SearchBar />
    <div className='home-categories'>
      <ul>
        <li onClick={() => setCategory((prev: string) => prev === "Perfumes" ? "" : "Perfumes")}>Perfumes</li>
        <li onClick={() => setCategory((prev: string) => prev === "Langeries" ? "" : "Langeries")}>Langeries</li>
        <li onClick={() => setCategory((prev: string) => prev === "Sex Shop" ? "" : "Sex Shop")}>Sex Shop</li>
      </ul>
    </div>
    <Grid>
      {category ? filteredProducts() : allProducts()}
    </Grid>
    <span>carregar mais</span>
  </Style>
}
export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryBanner: string = '*[_type == "banner"]';

  const products = await client.fetch(productsQuery);
  const banner = await client.fetch(queryBanner);

  return {
    props: {
      products,
      banner
    }
  }
} 