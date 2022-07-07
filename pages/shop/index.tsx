import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Grid, Product, SearchBar } from "../../components";
import { client } from "../../lib/client";
import { useStateContext } from '../../global/context/StateContext';
import { DivProp } from "../../components/StyledComponents";

const Styled = styled(DivProp)`
  .other-products {
    margin-bottom: 2em;
  }
  .other-products, .no-product{
  text-align: center;
 }
  .no-product {
  color: #a1a1a1;
  margin-bottom: 4em;
 }
`;

const Shop: NextPage = ({ products }: any) => {
    const { searchResults }: any = useStateContext();
    const allProducts = (products: any) => products.map((product: any) => <Product key={product._id} product={product}/>);

    return <Styled>
        <Head>
            <title>M&apos;adames </title>
            <meta name="description" content="Os produtos da Madames estão sempre prontos á entrega para a máxima satisfação dos clientes" />
        </Head>
        <SearchBar filter/>
        {searchResults && searchResults.lenght >= 1 ? (<Grid>{allProducts(searchResults)}</Grid>) : (<p className="no-product">Nenhum produto encontrado</p>)}
        <h4 className="other-products">Outros Produtos</h4>
        <Grid>
          {allProducts(products)}
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