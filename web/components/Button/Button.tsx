import React from "react";
import Button from "../../types/Button";
import styles from "./Button.module.css";

const Button: React.FC<Button> = ({ title, onClick, style }) => {
    return (
        <button onClick={onClick} className={styles.generalButton} style={style} >
            {title}
        </button>
    );
}

export default Button;