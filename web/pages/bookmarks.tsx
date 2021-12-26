import React, { useState, useEffect } from "react";
import { GetServerSideProps, NextPage, InferGetServerSidePropsType } from "next";
import { routes, pageRoutes } from "./api/routes";
import BookmarkComponent from '../components/Bookmarks/Bookmarks';

const Bookmarks: NextPage = ({
    bookmarkPageProps,
    bookmarksProps
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <BookmarkComponent bookmarks={[]} />
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const bookmarkPageRes = await fetch(pageRoutes.home)
    const bookmarksRes = await fetch(routes.posts)
    const bookmarkPageProps = await bookmarkPageRes.json()
    const bookmarksProps = await bookmarksRes.json()
    return { props: { bookmarkPageProps, bookmarksProps } }
}

export default Bookmarks;