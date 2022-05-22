import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components';
import GlobalStyle from '../global/styles/globalStyles';
import { StateContext } from '../global/context/StateContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
      <Layout>
        <GlobalStyle />
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}
