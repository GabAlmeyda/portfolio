import type { JSX, MouseEvent } from "react";

import styles from './Button.module.css';

type ValidColors = "primary" | "secondary" | "ghostPrimary" | "ghostSecondary"

interface ButtonProps {
    label: string;
    color?: ValidColors
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Renders a custom buttom for actions.
 * 
 * @param {Object} props - The properties of the component.
 * @param {string} props.label - The text to be displayed within the button.
 * @param {string} [props.color] - The style color of the button.
 * @param {(e: MouseEvent<HTMLButtonElement>) => void} props.onClick - The function to
 * handle the click event.
 *  
 * @returns {JSX.Element} A JSX element representing a button.
 */
function Button({label, color="primary", onClick}: ButtonProps): JSX.Element {

    return <button className={`${styles.button} ${styles[color]}`} onClick={onClick}>
        {label}
    </button>
}

export default Button;