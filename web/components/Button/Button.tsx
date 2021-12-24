import React from "react";
import ButtonProps from "../../types/Button";
import styles from "./Button.module.css";
import MuiButton from '@material-ui/core/Button';

const Button: React.FC<ButtonProps> = ({ title, onClick, style }) => {
    return (
        <MuiButton onClick={onClick} className={styles.generalButton} style={style} >
            {title}
        </MuiButton>
    );
}

export default Button;