import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { Typography } from "@material-ui/core";
import Button from "../Button/Button";
import ProfileDataProps from "../../types/ProfileData";

const Logout: React.FC<ProfileDataProps> = (props: ProfileDataProps) => {
    const { recipesCreated, recipesLiked, recipesCommented, recipesSaved, recipesFavorited, recipesShared, recipesViewed } = props;
    const { data: session, status } = useSession();
    return (
        <div>
            {
                session ?
                    <div className="flex flex-col-reverse space-x-0 md:flex-row md:space-x-80">
                        <div className="flex px-10 md:px-20 py-10">
                            <div className="">
                                <Typography variant="h5" gutterBottom>
                                    Welcome {session.user?.email}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    You have created {recipesCreated} recipes
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    You have liked {recipesLiked} recipes
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    You have commented {recipesCommented} recipes
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    You have saved {recipesSaved} recipes
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    You have favorited {recipesFavorited} recipes
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    You have shared {recipesShared} recipes
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    You have viewed {recipesViewed} recipes
                                </Typography>

                            </div>
                        </div>
                        <div className="flex px-20 py-10">
                            <div className="">
                                <Image src={session.user?.image || ''} width={200} height={200} >
                                </Image>
                            </div>
                        </div>
                    </div> : <h1>You are not logged in</h1>
            }
        </div>
    );
}

export default Logout;