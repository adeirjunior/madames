import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components';
import GlobalStyle from '../global/styles/globalStyles';
import { StateContext } from '../global/context/StateContext';
import { useRouter } from 'next/router';
import { useStateContext } from '../global/context/StateContext';

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  return (
    <StateContext>
      <Layout path={asPath}>
        <GlobalStyle />
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}
