import Head from 'next/head';
import React from 'react';
import Header from '../components/header/header';

export default class extends React.Component {
  render() {
    return (
      <>
        <Header />
        Hello Next.js
      </>
    );
  }
}
