import type { GetServerSideProps, NextPage } from 'next'
import LoginComponent from '../components/Auth/Login'
import Head from 'next/head'

const Login: NextPage = () => {
    return (
        <>
            <Head>
                <title>Grilling Ways - Login</title>
            </Head>
            <LoginComponent />
        </>
    )
}

export default Login
