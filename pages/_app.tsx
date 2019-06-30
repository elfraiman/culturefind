import App, { Container } from 'next/app';
import React from 'react';
import Header from '../components/header/header';
import './app.global.scss';

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
        {/* <style jsx global>
          body {
            
          }
          </style> */}
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </>
    );
  }
}

export default MyApp;
