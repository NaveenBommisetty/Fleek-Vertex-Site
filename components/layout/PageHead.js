import React from 'react';
import Head from 'next/head';

const PageHead = ({ headTitle = "Fleek Vertex - Software Development Company Bangalore" }) => {
    return (
        <Head>
            <title>{headTitle}</title>
            <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        </Head>
    );
};

export default PageHead;