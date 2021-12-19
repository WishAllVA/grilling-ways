import React from "react";
import Post from "../../types/Post";
import Image from "next/image";
import styles from './Post.module.css';
import LikeButton from "../LikeButton/LikeButton";
import CommentButton from "../CommentButton/CommentButton";
import ShareButton from "../ShareButton/ShareButton";
import { formatDate } from "../../utils/date";

const Post: React.FC<Post> = ({ title, description, author, id, comments, likes = 0, liked, time, imageUrl }: Post) => {
    const [likesCount, setLikesCount] = React.useState(likes);
    const [likedByUser, setLikedByUser] = React.useState(liked);
    const handleLike = () => {
        setLikedByUser(!likedByUser);
        setLikesCount(likedByUser ? likesCount - 1 : likesCount + 1);
    }
    return (
        <div className="grid grid-cols-1 gap-1 border px-5 py-5 w-11/12 lg:w-5/12 my-4">
            <div style={{ color: '#047857', fontWeight: 'bold', fontSize: '20px' }}>
                <h1>{title}</h1>
            </div>
            <p>By <span style={{ fontStyle: 'italic' }}>{author}</span></p>
            <p>{comments}</p>
            <p>{liked}</p>
            <p>{time ? formatDate(new Date(Number(time.split('-')[0]), Number(time?.split('-')[1]), Number(time?.split('-')[2])), 'de') : ''}</p>
            <Image
                key={id}
                width={200}
                height={300}
                src={imageUrl || ''} alt="Butter Chicken"
            />
            <p>{description}</p>
            <div className="flex-col lg:flex-row flex justify-items space-between">
                <div className="lg:mr-2 flex-1">
                    <LikeButton
                        likes={likesCount}
                        onLike={handleLike}
                        liked={likedByUser}
                    />
                </div>
                <div className="sm:md-2 lg:mr-2 flex-1">
                    <CommentButton />
                </div>
                <div className="flex-1">
                    <ShareButton />
                </div>
            </div>
        </div>
    )
}

export default Post;