import React from "react";
import Post from "../../types/Post";
import Image from "next/image";
import styles from './Post.module.css';
import LikeButton from "../LikeButton/LikeButton";
import CommentButton from "../CommentButton/CommentButton";
import ShareButton from "../ShareButton/ShareButton";

const Post: React.FC<Post> = ({ title, description, author, id, comments, likes = 0, liked, time, imageUrl }: Post) => {
    const [likesCount, setLikesCount] = React.useState(likes);
    const [likedByUser, setLikedByUser] = React.useState(liked);
    const handleLike = () => {
        setLikedByUser(!likedByUser);
        setLikesCount(likedByUser ? likesCount - 1 : likesCount + 1);
    }
    return (
        <div className="grid grid-cols-1 gap-1 border px-5 py-5 w-4/12 my-4">
            <h1>{title}</h1>
            <p>Created By <span style={{ fontStyle: 'italic' }}>{author}</span></p>
            <p>{comments}</p>
            <p>{liked}</p>
            <p>{time}</p>
            <Image
                key={id}
                width={200}
                height={300}
                src={imageUrl || ''} alt="Butter Chicken"
            />
            <p>{description}</p>
            <div className="flex justify-items">
                <div className="mr-8">
                    <LikeButton
                        likes={likesCount}
                        onLike={handleLike}
                        liked={likedByUser}
                    />
                </div>
                <div className="mr-10">
                    <CommentButton />
                </div>
                <div>
                    <ShareButton />
                </div>
            </div>
        </div>
    )
}

export default Post;