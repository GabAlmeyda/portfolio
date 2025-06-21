import type { JSX } from "react";

import styles from "./ToolsSection.module.css";
import { TOOLS } from "../../utils/constants";

import ToolCard from "../../components/ui/ToolCard";

function ToolsSection(): JSX.Element {
    return (
        <section className={styles.tools}>
            <h2>Minhas habilidades</h2>

            <div className={styles.tools__grid}>
                {Object.entries(TOOLS).map(([name, tools]) => (
                    <ToolCard tools={tools} name={name} />
                ))}
            </div>
        </section>
    );
}

export default ToolsSection;
