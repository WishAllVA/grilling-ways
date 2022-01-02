import React, { useState, useEffect } from 'react';
import type { GetServerSideProps, NextPage } from 'next'
import NoAuth from '../components/Auth/NoAuth';
import Head from 'next/head';
import { useSession, signIn, signOut } from 'next-auth/react'


const Trending: NextPage = () => {
    const { data: session, status } = useSession()
    return (
        <div>
            <Head>
                <title>Grilling Ways - Trending</title>
            </Head>
            <h1>Trending</h1>
            {
                session ?
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
