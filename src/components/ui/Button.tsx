import type { JSX, MouseEvent } from "react";

import styles from './Button.module.css';

type ValidColors = "primary" | "secondary" | "ghostPrimary" | "ghostSecondary"

interface ButtonProps {
    label: string;
    color: ValidColors
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

function Button({label, color, onClick}: ButtonProps): JSX.Element {

    return <button className={`${styles.button} ${styles[color]}`} onClick={onClick}>
        {label}
    </button>
}

export default Button;