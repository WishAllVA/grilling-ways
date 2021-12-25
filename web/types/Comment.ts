interface Comment {
    author: string;
    comment: string;
    reply?: Comment[];
    likes?: number;
    dislikes?: number;
}

export default Comment;