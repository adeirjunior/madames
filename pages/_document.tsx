import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ReactElement } from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ],
      }
    } finally {
      sheet.seal();
    }
  }
  render(): ReactElement {
    return (
        <Html lang="en">
            <Head>
              <meta name="google-site-verification" content="QEDxcauw5S2Zb7wLO6cfVL6916bTul7_PHD2k2UI_fk" />
              <meta name="google" content="notranslate" />
              <link rel="icon" href="assets/icons/m.png" type="image/icon type" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="manifest" href="/manifest.json" />
              <meta name="apple-mobile-web-app-status-bar" content="#4e0b43" />
              <link rel="apple-touch-icon" href="/icon-192x192.png" />
              <meta name="theme-color" content="#4e0b43"></meta>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
              <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Parisienne&display=swap" rel="stylesheet" />
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
        </Html>
    );
}
}

export default MyDocument;