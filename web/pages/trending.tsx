import React, { useState, useEffect } from 'react';
import type { GetServerSideProps, NextPage } from 'next'
import NoAuth from '../components/Auth/NoAuth';
import Head from 'next/head';

const Trending: NextPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.localStorage.getItem('jwt')) {
                setIsLoggedIn(true);
                // window.location.href = '/';
            }
        }
    }, []);

    return (
        <div>
            <Head>
                <title>Grilling Ways - Trending</title>
            </Head>
            <h1>Trending</h1>
            {
                isLoggedIn ?
                    <div>
                        <h1>You are logged in</h1>
                    </div>
                    :
                    <NoAuth />
            }
        </div>
    )
}

export default Trending
