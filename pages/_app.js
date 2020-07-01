import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';

import 'bootstrap/dist/css/bootstrap.min.css';

class MyApp extends App {
    componentDidCatch(error, errorInfo) {
        captureException(error, { errorInfo });
        super.componentDidCatch(error, errorInfo);
    }
    
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <title> NextJS Training </title>
                </Head>
                 <Component {...pageProps} />
            </>
        );
    }
}

export default MyApp;
