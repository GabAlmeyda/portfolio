import type { JSX } from "react";

import styles from "./ToolsSection.module.css";
import { TOOLS } from "../../utils/constants";

import ToolCard from "../../components/ui/ToolCard";

/**
 * Renders the tools section of the `Homepage` component.
 * 
 * @returns {JSX.Element} A JSX element representing the tools section 
 * of the `Homepage` component.
 */
function ToolsSection(): JSX.Element {
    return (
        <section className={styles.tools} id="tools">
            <h2>Minhas habilidades</h2>

            <div className={styles.tools__grid}>
                {Object.entries(TOOLS).map(([name, tools]) => (
                    <ToolCard tools={tools} name={name} key={`toolcard-${name}`}/>
                ))}
            </div>
        </section>
    );
}

export default ToolsSection;
