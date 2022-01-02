interface Button {
    title: string;
    onClick: () => void;
    style?: {
        backgroundColor?: string;
        color?: string;
        width?: string;
        height?: string;
        display?: string;
        margin?: string;
        marginRight?: string;
        marginLeft?: string;
    };
}

export default Button;