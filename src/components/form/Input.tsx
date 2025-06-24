import type { ChangeEvent, JSX } from "react";

import styles from "./Input.module.css";

type InputTypes =
    | "text"
    | "email"
    | "password"
    | "number"
    | "url"
    | "tel"
    | "search"
    | "date";

interface InputProps {
    id: string;
    value: string;
    label?: string;
    placeholder?: string;
    autoComplete?: string;
    isInvalid: boolean
    type?: InputTypes;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Renders a custom input element.
 *
 * @param {Object} props - The properties of the component.
 * @param {string} props.id - The id of the input.
 * @param {string} props.value - The content of the input.
 * @param {string} [props.label] - The label of the input.
 * @param {string} [props.placeholder] - The placeholder of the input.
 * @param {string} [props.autoComplete] - The HTML auto complete type of the input. If not 
 * passed, the input will not have an auto complete.
 * @param {boolean} [props.isInvalid] - Indicates if the content of the field is invalid to
 * set a custom style for the error.
 * @param {InputTypes} [props.type] - The HTML type attribute of the input.
 * @param {(e: ChangeEvent<HTMLInputElement>) => void} props.onChange - The function to
 * handle the input changes.
 *
 * Note: Either the `label` or `placeholder` should be provided to describe the input.
 *
 * @returns {JSX.Element} A JSX element representing a custom input.
 */
function Input({
    id,
    value,
    label,
    placeholder = "",
    autoComplete="off",
    isInvalid = false,
    type = "text",
    onChange,
}: InputProps): JSX.Element {
    if (!label && !placeholder) {
        console.warn(
            `Input with id '${id}' is missing both label and placeholder.`
        );
    }

    return (
        <div className={`${styles.field} ${isInvalid && styles.invalid}`}>
            <label htmlFor={id} className={styles.field__label}>{label}</label>
            <input
                type={type}
                id={id}
                name={id}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                className={styles.field__input}
                autoComplete={autoComplete}
            />
        </div>
    );
}

export default Input;
