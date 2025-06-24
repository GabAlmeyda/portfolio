import type { ChangeEvent, JSX } from "react";

import styles from "./Textarea.module.css";

interface TextareaProps {
    id: string;
    value: string;
    label?: string;
    placeholder?: string;
    isInvalid: boolean
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * Renders a custom textarea element.
 *
 * @param {Object} props - The properties of the component.
 * @param {string} props.id - The id of the text area.
 * @param {string} props.value - The content of the text area.
 * @param {string} [props.label] - The label of the text area.
 * @param {string} [props.placeholder] - The placeholder of the text area.
 * @param {boolean} [props.isInvalid] - Indicates if the content of the field is invalid to
 * set a custom style for the error.
 * @param {(e: ChangeEvent<HTMLTextAreaElement>) => void} props.onChange - The function to
 * handle the text area changes.
 *
 * Note: Either the `label` or `placeholder` should be provided to describe the text area.
 *
 * @returns {JSX.Element} A JSX element representing a custom text area.
 */
function Textarea({
    id,
    value,
    label,
    placeholder = "",
    isInvalid = false,
    onChange,
}: TextareaProps): JSX.Element {
    if (!label && !placeholder) {
        console.warn(
            `Text area with id '${id}' is missing both label and placeholder.`
        );
    }

    return (
        <div className={`${styles.field} ${isInvalid && styles.invalid}`}>
            <label htmlFor={id} className={styles.field__label}>{label}</label>
            <textarea
                id={id}
                name={id}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                className={styles.field__textarea}
            />
        </div>
    );
}

export default Textarea;
