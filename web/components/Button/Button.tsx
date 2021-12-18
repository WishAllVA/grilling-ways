import React from "react";
import Button from "../../types/Button";
import styles from "./Button.module.css";

const Button: React.FC<Button> = ({ title, onClick }) => {
    return (
        <button onClick={onClick} className={styles.generalButton} >
            {title}
        </button>
    );
}

export default Button;