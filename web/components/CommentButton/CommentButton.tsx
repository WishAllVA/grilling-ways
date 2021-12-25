import React from "react";
import Button from "../Button/Button";

interface CommentButtonProps {
    onClick: () => void;
}

const CommentButton: React.FC<CommentButtonProps> = ({ onClick }) => {
    return (
        <Button
            title={'Comment'}
            onClick={onClick}
            style={{
                backgroundColor: 'blue',
                color: '#fff',
                width: '100%',
            }}
        />
    );
}

export default CommentButton;