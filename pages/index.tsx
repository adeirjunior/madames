import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import { client } from '../lib/client';
import { Product } from '../components';

const Style = styled.div`
div{
  background-color: red;
}
`

const Home: NextPage = ({ products }: any) => {
  console.log(products);
  return (
    <Style>
      <div></div>
      {
        products.map((product: any) => <Product key={product._id} product={product}/>)
      }
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