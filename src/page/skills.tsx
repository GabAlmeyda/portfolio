import type { JSX } from "react";

import styles from "./skills.module.css";
import ToolCard from "../components/ui/ToolCard";
import { TOOLS } from "../utils/constants";

function Skills(): JSX.Element {
    return (
        <section className={styles.skills}>
            {Object.entries(TOOLS).map(([name, tool]) => (
                <ToolCard name={name} tool={tool} key={`tool-${name}`}/>
            ))}
        </section>
    );
}

export default Skills;
