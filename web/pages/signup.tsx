import type { GetServerSideProps, NextPage } from 'next'
import SignupComponent from '../components/Auth/Signup'
import Head from 'next/head'

const Signup: NextPage = () => {
    return (
        <>
            <Head>
                <title>Grilling Ways - Signup</title>
            </Head>
            <SignupComponent />
        </>
    )
}

export default Signup
