import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import { client } from '../lib/client';
import { Product } from '../components';
import Grid from '../components/Grid';

const Style = styled.div`
.hero-banner{
  background-color: #EE7674;
  width: 100%;
  height: 10em;
  border-radius: 1em;
}
`

const Home: NextPage = ({ products }: any) => {

  return (
    <Style>
      <div className="hero-banner"></div>
      <Grid>
        {
          products.map((product: any) => <Product key={product._id} product={product}/>)
        }
      </Grid>
     
    </Style>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const query: string = '*[_type == "product"]';

  const products = await client.fetch(query);
  return {
    props: {
      products
    }
  }
} 