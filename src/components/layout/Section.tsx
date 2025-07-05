import type { HTMLAttributes, JSX, ReactNode } from "react";

import styles from './Section.module.css';

interface SectionProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    className?: string;
}

/**
 * Renders a customizable section por webiste layout.
 * 
 * @param {Object} props - The properties of the component.
 * @param {ReactNode} props.children - The content to the displayed within
 * the section component.
 * @param {string} [props.className] - The opcional custom class name. If not
 * provided, the section will use the default styling.
 *  
 * @returns {JSX.Element} A JSX element representing a custom section.
 */
function Section({ children, className, ...rest }: SectionProps): JSX.Element {
    
    return <section className={`${className ? className : styles.section}`} {...rest}>
        {children}
    </section>
}

export default Section