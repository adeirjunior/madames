import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import { client } from '../lib/client';
import { HeroBanner, Product } from '../components';
import Grid from '../components/Grid';

const Style = styled.div`
  span{
    font-family: Montserrat;
    font-size: .7rem;
    display: flex;
    justify-content: center;
    margin: 1.5em 0 0;
  }
`

const Home: NextPage = ({ products, banner }: any) => {

  return (
    <Style>
      <HeroBanner banner={banner[0]} />
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