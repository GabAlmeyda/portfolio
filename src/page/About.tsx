import type { JSX } from "react";

import styles from "./About.module.css";

import aboutImage from '/src/assets/images/about.svg';

import Section from "../components/layout/Section";

/**
 * Renders the about section of the website.
 *
 * @returns {JSX.Element} A JSX element representing the about section
 * of the website.
 */
function About(): JSX.Element {
    return (
        <Section className={styles.about} id="about">
            <div className={styles.about__visual}>
                <img src={aboutImage} alt="Sobre" aria-hidden="true" />
            </div>
            <div className={styles.about__content}>
                <h2>Sobre mim</h2>
                <p>
                    Sou um desenvolvedor Full-Stack com experiência em diversos
                    projetos, buscando sempre o equilíbrio entre um design
                    chamativo, usabilidade e acessibilidade.
                </p>
                <p>
                    Trabalho usando tecnologias modernas como React, TypeScript
                    e Node.JS, criando interfaces agradáveis e eficientes que
                    funcionam em qualquer dispositivo.
                </p>
            </div>
        </Section>
    );
}

export default About;
