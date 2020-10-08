import App from 'next/app';
import React from 'react';
import { createGlobalStyle } from '../conf/styled';
import { reset } from 'styled-reset';
import { RecoilRoot } from 'recoil';

const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        
    }
`;

export default class ExtendApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <RecoilRoot>
        <Component {...pageProps} />
        <GlobalStyle />
      </RecoilRoot>
    );
  }
}
