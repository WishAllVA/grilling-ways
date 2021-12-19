import React from "react";
import Button from "../Button/Button";

const CommentButton: React.FC = () => {
    return (
        <Button
            title={'Comment'}
            onClick={() => {
                console.log('Comment Button Clicked');
            }}
            style={{
                backgroundColor: 'blue',
                color: '#fff',
                width: '100%',
            }}
        />
    );
}

export default CommentButton;