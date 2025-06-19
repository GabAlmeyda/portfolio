import type { JSX } from "react";

import styles from "./ProjectsSection.module.css";

import { projectsInfo } from "../../utils/projectsInfo";
import { WEBSITE_URLS } from "../../utils/constants";

import LinkButton from "../../components/ui/LinkButton";

function ProjectsSection(): JSX.Element {
    return (
        <div className={styles.projects}>
            <h2>Projetos</h2>

            <div className={styles.projects__carousel}>
                {projectsInfo.map((project) => (
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
        </div>
    );
}

export default ProjectsSection;
