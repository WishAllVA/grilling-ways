interface Post {
    id: string;
    title: string;
    description: string;
    time?: string;
    imageUrl?: string;
    author?: string;
    comments?: string[];
    likes?: number;
    liked?: boolean;
}

export default Post;