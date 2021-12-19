interface LikeButton {
    likes?: number;
    liked?: boolean;
    onLike: () => void;
}

export default LikeButton;