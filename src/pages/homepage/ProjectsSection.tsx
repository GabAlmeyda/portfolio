import type { JSX } from "react";

import styles from "./ProjectsSection.module.css";

import { PROJECTS_INFO } from "../../utils/constants";
import { WEBSITE_URLS } from "../../utils/constants";

import LinkButton from "../../components/ui/LinkButton";

/**
 * Renders the projects section of the `Homepage` component.
 * 
 * @returns {JSX.Element} A JSX element representing the projects section 
 * of the `Homepage` component.
 */
function ProjectsSection(): JSX.Element {
    return (
        <section className={styles.projects}>
            <h2>Projetos</h2>

            <div className={styles.projects__carousel}>
                {PROJECTS_INFO.map((project) => (
                    <div key={project.id} className={styles.carousel__card}>
                        <div className={styles.carousel__imageContainer}>
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
                            <LinkButton
                                label="Conheça"
                                to={`${WEBSITE_URLS.projects}/${project.id}`}
                                color="secondary"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
