import type { JSX, ReactNode } from "react";

import styles from "./Form.module.css";

interface FormProps {
    children: ReactNode;
}

/**
 * Renders a container for form elements.
 *
 * @param {object} props - The properties of the component.
 * @param {React.ReactNode} props.children - The elements to be rendered within the
 * form.
 *
 * @returns {JSX.Element} A JSX element representing a container for form elements.
 */
function Form({ children }: FormProps): JSX.Element {
    return (
        <form
            action=""
            method="POST"
            onSubmit={(e) => e.preventDefault()}
            className={styles.form}
        >
            {children}
        </form>
    );
}

export default Form;
