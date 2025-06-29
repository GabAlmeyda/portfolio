import type { JSX } from "react";

import styles from "./Tools.module.css";
import type { ToolIcon } from "../utils/constants";

import {
    SiFigma,
    SiHtml5,
    SiCss3,
    SiPython,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiGit,
    SiGithub,
    SiNodedotjs,
    SiPostgresql,
} from "react-icons/si";

interface ToolCard {
    title: string;
    summary: string;
    tools: ToolIcon[];
}

const supportTools: ToolCard = {
    title: "Versionamento e Design",
    summary:
        "Plataformas que auxiliam no design da interface e no controle de versões do código.",
    tools: [
        { Icon: SiPython, name: "Python" },
        { Icon: SiNodedotjs, name: "NodeJS" },
        { Icon: SiPostgresql, name: "PostGreSQL" },
    ],
};

const frontendTools: ToolCard = {
    title: "Front-End",
    summary:
        "Ferramentas para a criação visual de um site moderno, eficiente e responsivo.",
    tools: [
        { Icon: SiFigma, name: "Figma" },
        { Icon: SiGit, name: "Git" },
        { Icon: SiGithub, name: "GitHub" },
    ],
};

const backendTools: ToolCard = {
    title: "Back-End",
    summary:
        "Linguagens para a manipulação e transferência de dados de forma rápida e segura.",
    tools: [
        { Icon: SiFigma, name: "Figma" },
        { Icon: SiHtml5, name: "HTML5" },
        { Icon: SiCss3, name: "CSS3" },
        { Icon: SiJavascript, name: "JavaScript" },
        { Icon: SiTypescript, name: "TypeScript" },
        { Icon: SiReact, name: "React" },
    ],
};

/**
 * Renders the tools section of the website.
 * 
 * @returns {JSX.Element} A JSX element representing the tools section 
 * of the website.
 */
function Tools(): JSX.Element {
    return (
        <section className={styles.tools} id="tools">
            <h2>Habilidades</h2>
            <p>Estas são as linguagens e ferramentas que utilizo para criar sites responsivos e modernos:</p>
            <div className={styles.tools__cards}>
                {Array.from([supportTools, frontendTools, backendTools]).map(
                    (card) => (
                        <div className={styles.card} key={`card-${card.title}`}>
                            <h3 className={styles.card__title}>{card.title}</h3>
                            <p className={styles.card__summary}>{card.summary}</p>
                            <div className={styles.card__tools}>
                                {card.tools.map((tool) => (
                                    <div className={styles.tools__tool} key={`card-${card.title}__tool-${tool.name}`}>
                                        <tool.Icon />
                                        <p>{tool.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
}

export default Tools;
