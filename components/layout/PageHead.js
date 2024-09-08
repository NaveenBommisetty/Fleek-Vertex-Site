import React from 'react';
import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Fleek Vertex - Software Development Company Bangalore"}

                </title>
                {/* <link
                    href="https://fonts.bunny.net/css?family=chivo:700|manrope:400,500,700,800|shippori-mincho:700,800"
                    rel="stylesheet"
                /> */}
                <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
            </Head>
        </>
    );
};

export default PageHead;