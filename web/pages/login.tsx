import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import LoginComponent from '../components/Auth/Login'
import Head from 'next/head'
import { getProviders, getSession, getCsrfToken, signIn, SessionProviderProps } from 'next-auth/react'

const Login: NextPage = ({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <title>Grilling Ways - Login</title>
            </Head>
            <LoginComponent providers={providers} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { req, res, query } = context
    const { callbackUrl } = query
    const session = await getSession({ req })
    console.log(session)
    if (session && res) {
        res.writeHead(302, { Location: callbackUrl || '/' })
        res.end()
        return {
            props: {
                providers: [],
                session: {
                    // accessToken: session.accessToken,
                    // user: session.user,
                },
            },
        }
    }
    return {
        props: {
            session: null,
            providers: await getProviders(),
        }
    }
}

export default Login
