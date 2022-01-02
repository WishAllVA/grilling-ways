import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import LogoutComponent from '../components/Auth/Logout'
import Head from 'next/head'
import { getProviders, getSession, getCsrfToken, signIn, SessionProviderProps } from 'next-auth/react'

const Login: NextPage = () => {
    return (
        <>
            <Head>
                <title>Grilling Ways - Logout</title>
            </Head>
            <LogoutComponent />
        </>
    )
}

export default Login
