import "../style/global.css";
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { Layout, Popup } from '../components';
import GlobalStyle from '../global/styles/globalStyles';
import { StateContext } from '../global/context/StateContext';
import { useRouter } from 'next/router';
import { useStateContext } from '../global/context/StateContext';
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { defaultSEO } from "../next-seo.config";


const App = ({ Component, pageProps }: AppProps) => {
  const { asPath } = useRouter();
  const { showCart }: any = useStateContext();

  return <StateContext>
    <Head>
      <meta name="apple-mobile-web-app-status-bar" content="#4e0b43" />
      <meta name="theme-color" content="#4e0b43" />
      <meta name="google-site-verification" content="QEDxcauw5S2Zb7wLO6cfVL6916bTul7_PHD2k2UI_fk" />
      <meta name="google" content="notranslate" />
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
    </Head>
    <Layout path={asPath}>
      <DefaultSeo {...defaultSEO}/>
      <GlobalStyle {...pageProps} cartActivated={showCart} />
      <Toaster />
      <Popup message="Este site esta em processo de construção." duration={10}/>
      <Component {...pageProps} />
    </Layout>
  </StateContext>
}

export default App;