import { useEffect, useState, type JSX } from "react";

import styles from "./Toast.module.css";

interface ToastProps {
    label: string;
    state: "idle" | "pending" | "success" | "error";
}

/**
 * Renders a custom toast to display information.
 *
 * @param {Object} props - The properties of the component.
 * @param {string} props.label - The text to be displayed.
 * @param {"idle" | "pending" | "success" | "error"} props.state - The current state of the
 * toast message.
 *
 * @returns {JSX.Element} A JSX element representing a custom toast.
 */
function Toast({ label, state }: ToastProps): JSX.Element {
    const [isOpen, setIsOpen] = useState(state !== "idle");

    useEffect(() => {
        if (state === "idle") return;

        setIsOpen(true);
        const timerID = setTimeout(() => {
            setIsOpen(false);
         }, 3000);

        return () => clearTimeout(timerID);
    }, [state]);

    const ariaLive = state === "error" ? "assertive" : "polite";
    const ariaRole = state === "error" ? "alert" : "status";

    return (
        <div
            className={`${styles.toast} ${state !== "idle" ? styles[state]: ""} ${
                isOpen ? styles.isOpen : styles.isClosed
            }`}
            aria-live={ariaLive}
            role={ariaRole}
            aria-hidden={!isOpen}
            onClick={() => setIsOpen(false)}
        >
            <p>{label}</p>
        </div>
    );
}

export default Toast;
