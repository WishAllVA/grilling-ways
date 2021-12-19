interface Button {
    title: string;
    onClick: () => void;
    style?: {
        backgroundColor?: string;
        color?: string;
        width?: string;
        height?: string;
        display?: string;
    };
}

export default Button;