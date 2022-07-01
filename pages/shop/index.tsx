import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Grid, Product, SearchBar } from "../../components";
import { client } from "../../lib/client";
import { useStateContext } from '../../global/context/StateContext';

const Styled = styled.div`

`;

const Shop: NextPage = ({ products }: any) => {
    const { searchResults }: any = useStateContext();
    const allProducts = (products: any) => products.map((product: any) => <Product key={product._id} product={product}/>);

    return <Styled>
        <Head>
            <title>M&apos;adames </title>
            <meta name="description" content="Os produtos da Madames estão sempre prontos á entrega para a máxima satisfação dos clientes" />
        </Head>
        <SearchBar />
        <Grid>
            {searchResults ? allProducts(searchResults) : allProducts(products)}
        </Grid>
    </Styled>
}

export default Shop;

export const getServerSideProps: GetServerSideProps = async () => {
    const query: string = `*[_type == "product"]`;
    const products = await client.fetch(query);
  
    return {
      props: {
        products
      }
    }
  } 