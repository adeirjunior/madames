import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';

const Style = styled.div`
div{
  background-color: red;
}
`

const Home: NextPage = () => {
  return (
    <Style>
      <div></div>
    </Style>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const query = '*[_type == "product"]';

  return {
    props: {
      query
    }
  }
}
