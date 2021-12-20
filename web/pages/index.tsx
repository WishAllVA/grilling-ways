import type { InferGetServerSidePropsType, GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Posts from '../components/Posts/Posts'
import CreatePost from '../components/CreatePost/CreatePost'
import { routes, pageRoutes } from './api/routes'
import PostProps from '../types/Post'

const Home: NextPage = ({
  homePageProps,
  postsProps
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const posts: PostProps[] = []
  const { data } = postsProps
  data?.forEach((element: any) => {
    const { title, description, id, author, comments, likes, liked, time, imageUrl } = element.attributes
    posts.push({ id: element.id, title, description, author, comments, likes, liked, time, imageUrl })
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Grilling Ways</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="m-5">
          <CreatePost />
        </div>
        <Posts posts={posts} />

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div >
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const homePageRes = await fetch(pageRoutes.home)
  const postsRes = await fetch(routes.posts)
  const homePageProps = await homePageRes.json()
  const postsProps = await postsRes.json()
  return { props: { homePageProps, postsProps } }
}

export default Home
