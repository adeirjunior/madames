import "../style/global.css";
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components';
import GlobalStyle from '../global/styles/globalStyles';
import { StateContext } from '../global/context/StateContext';
import { useRouter } from 'next/router';
import { useStateContext } from '../global/context/StateContext';
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const { showCart }: any = useStateContext();

  return (
    <StateContext>
      <Head>
        <meta name="apple-mobile-web-app-status-bar" content="#4e0b43" />
        <meta name="theme-color" content="#4e0b43" />
        <meta name="google-site-verification" content="QEDxcauw5S2Zb7wLO6cfVL6916bTul7_PHD2k2UI_fk" />
        <meta name="google" content="notranslate" />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
      </Head>
      <Layout path={asPath}>
        <GlobalStyle {...pageProps} cartActivated={showCart} />
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}
