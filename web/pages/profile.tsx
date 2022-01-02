import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import ProfileComponent from "../components/Profile/Profile";
import { useSession } from "next-auth/react";
import ProfileDataProps from "../types/ProfileData";

const Profile: NextPage = () => {
    const profileData: ProfileDataProps = {
        recipesCreated: 0,
        recipesLiked: 0,
        recipesCommented: 0,
        recipesSaved: 0,
        recipesFavorited: 0,
        recipesShared: 0,
        recipesViewed: 0,
    };
    return (
        <div>
            <Head>
                <title>Grilling Ways - Profile</title>
            </Head>
            <ProfileComponent {...profileData} />
        </div>
    );
};

export default Profile;