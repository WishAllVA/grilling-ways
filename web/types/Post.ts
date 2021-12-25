import Comment from './Comment';

interface Post {
    id: string;
    title: string;
    description: string;
    time?: string;
    imageUrl?: string;
    author?: string;
    comments?: Comment[];
    likes?: number;
    liked?: boolean;
}

export default Post;