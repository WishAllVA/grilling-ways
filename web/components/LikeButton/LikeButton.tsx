import React from "react";
import Button from "../Button/Button";
import LikeButtonProp from "../../types/LikeButtonProp";

const LikeButton: React.FC<LikeButtonProp> = ({ likes, liked, onLike }) => {
    return (
        <Button
            // title={likes?.toString() || '0'}
            title={liked ? 'Unlike' : 'Like'}
            onClick={onLike}
            style={liked ? {
                backgroundColor: '#ffc107',
                color: '#fff',
                width: '100%',
            } : {
                backgroundColor: 'green',
                color: '#000',
                width: '100%',
            }}
        />
    );
}

export default LikeButton;