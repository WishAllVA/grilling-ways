import React from "react";
import Button from "../Button/Button";

const ShareButton: React.FC = () => {
    return (
        <Button
            title={'Share'}
            onClick={() => {
                console.log('Share Button Clicked');
            }}
            style={{
                backgroundColor: '#1da1f2',
                color: '#fff',
                width: '100%',
            }}
        />
    );
}

export default ShareButton;