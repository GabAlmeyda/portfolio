import type { JSX, ReactNode } from "react";

import styles from "./Form.module.css";

interface FormProps {
    children: ReactNode;
    className?: string;
}

/**
 * Renders a container for form elements.
 *
 * @param {object} props - The properties of the component.
 * @param {React.ReactNode} props.children - The elements to be rendered within the
 * form.
 * @param {string} [props.className] - Opcional CSS class for external style.
 *
 * @returns {JSX.Element} A JSX element representing a container for form elements.
 */
function Form({ children, className }: FormProps): JSX.Element {
    return (
        <form
            action=""
            method="POST"
            onSubmit={(e) => e.preventDefault()}
            className={className ? className : styles.form}
        >
            {children}
        </form>
    );
}

export default Form;
