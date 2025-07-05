import type { JSX } from "react";

import styles from "./Projects.module.css";

import { PROJECTS_INFO } from "../utils/constants";

import Button from "../components/ui/Button";
import Section from "../components/layout/Section";

/**
 * Renders the projects section of the website.
 * 
 * @returns {JSX.Element} A JSX element representing the projects section 
 * of the website.
 */
function Projects(): JSX.Element {
    return (
        <Section className={styles.projects} id="projects">
            <h2>Projetos</h2>

            <div className={styles.projects__list}>
                {PROJECTS_INFO.map((project) => (
                    <div key={project.id} className={styles.list__card}>
                        <div className={styles.list__imageContainer}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className={styles.card__image}
                            />
                            <div className={styles.card__imageOverlay}></div>
                        </div>
                        <h3 className={styles.card__title}>{project.title}</h3>
                        <p className={styles.card__summary}>
                            {project.summary}
                        </p>

                        <div className={styles.card__linkButtonContainer}>
                            <Button
                                label="Conheça"
                                color="secondary"
                                onClick={() => window.open(project.url, "_blank")}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default Projects;