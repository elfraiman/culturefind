import Header from '../components/header/header';
import App, { Container } from 'next/app';
import React from 'react';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: { Component: any, ctx: any }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </>
    );
  }
}

export default MyApp;
