import type { JSX, ReactNode } from "react";

import styles from './Main.module.css';

interface MainProps {
    children: ReactNode
}

/**
 * Renders a custom container for the main content.
 * 
 * @param {Object} props - The properties of the component.
 * @param {ReactNode} props.children - The content to be displayed within the component. 
 * 
 * @returns {JSX.Element} A JSX element representing the container for the main content.
 */
function Main({children}: MainProps): JSX.Element {
    return <main className={styles.main}>
        {children}
    </main>
}

export default Main;