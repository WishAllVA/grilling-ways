import React from "react";
import PostProps from "../../types/Post";
import Post from './Post';

const Posts: React.FC = () => {
    const posts = [
        {
            title: 'Butter Chicken',
            description: 'Lovely dish made with butter and chicken',
            id: '1',
            author: 'Vishal Arora',
            comments: [],
            likes: 0,
            liked: false,
            time: '2020-05-05',
            imageUrl: 'https://www.simplyrecipes.com/thmb/1SXZ_F1GC6ww_ppWnrdbKgHi9fQ=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg'
        },
        {
            title: 'Palak Paneer',
            description: 'Made with Palak and Paneer',
            id: '2',
            author: 'Akanksha Singh',
            comments: [],
            likes: 2,
            liked: true,
            time: '2020-05-05',
            imageUrl: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/palak-paneer-3.jpg'
        },
    ]

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