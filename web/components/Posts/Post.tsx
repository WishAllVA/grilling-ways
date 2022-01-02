import React from "react";
import Post from "../../types/Post";
import Image from "next/image";
import styles from './Post.module.css';
import LikeButton from "../LikeButton/LikeButton";
import CommentButton from "../CommentButton/CommentButton";
import ShareButton from "../ShareButton/ShareButton";
import CommentsModal from "../CommentButton/CommentModal";
import { useSession } from "next-auth/react";

const Post: React.FC<Post> = ({ title, description, author, id, comments, likes = 0, liked, time, imageUrl }: Post) => {
    const [likesCount, setLikesCount] = React.useState(likes);
    const [likedByUser, setLikedByUser] = React.useState(liked);
    const [commentsModal, setCommentsModal] = React.useState(false);
    const { data: session } = useSession();
    const handleLike = () => {
        setLikedByUser(!likedByUser);
        setLikesCount(likedByUser ? likesCount - 1 : likesCount + 1);
    }
    const handleCommentsModal = () => {
        setCommentsModal(false);
    }
    return (
        <>
            <CommentsModal open={commentsModal} onClose={handleCommentsModal} comments={comments} />
            <div className="grid grid-cols-1 gap-1 border px-5 py-5 w-11/12 lg:w-5/12 my-4">
                <div style={{ color: '#047857', fontWeight: 'bold', fontSize: '20px' }}>
                    <h1>{title}</h1>
                </div>
                <p>By <span style={{ fontStyle: 'italic' }}>{author}</span></p>
                <p>{liked}</p>
                <p>{time ? new Date(time).toLocaleString() : ''}</p>
                <Image
                    key={id}
                    width={200}
                    height={300}
                    src={imageUrl || ''} alt="Butter Chicken"
                />
                <p>{description}</p>
                {
                    session && <div className="flex-row flex justify-items space-between">
                        <div className="mr-2 flex-1">
                            <LikeButton
                                likes={likesCount}
                                onLike={handleLike}
                                liked={likedByUser}
                            />
                        </div>
                        <div className="mr-2 flex-1">
                            <CommentButton onClick={() => { setCommentsModal(true) }} />
                        </div>
                        <div className="flex-1">
                            <ShareButton />
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Post;