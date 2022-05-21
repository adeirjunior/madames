import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components';
import GlobalStyle from '../global/styles/globalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    
      <Layout>
        <GlobalStyle />
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    
  )
}
