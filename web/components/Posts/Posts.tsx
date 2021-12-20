import React from "react";
import PostProps from "../../types/Post";
import Post from './Post';

interface PostsProps {
    posts: PostProps[];
}

const Posts: React.FC<PostsProps> = ({ posts }: PostsProps) => {

    return (
        <>
            {posts.map((post: PostProps) => (
                <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    author={post.author}
                    description={post.description}
                    comments={post.comments}
                    likes={post.likes}
                    liked={post.liked}
                    time={post.time}
                    imageUrl={post.imageUrl}
                />
            ))}
        </>
    )
}

export default Posts;