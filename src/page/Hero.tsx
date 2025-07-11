import type { JSX } from "react";

import styles from "./Hero.module.css";
import { navigateTo } from "../utils/functions";

import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";

import heroImage from "/src/assets/images/hero.svg";

import Button from "../components/ui/Button";
import Section from "../components/layout/Section";

/**
 * Renders the hero section of the website.
 *
 * @returns {JSX.Element} A JSX element representing the hero section
 * of the website.
 */
function Hero(): JSX.Element {
    return (
        <Section className={styles.hero}>
            <div className={styles.hero__content}>
                <h1 className={styles.hero__intro}>
                    Olá, me chamo <br /> <span>Gabriel Almeida</span>
                </h1>
                <p className={styles.hero__desc}>
                    Sou um <span>desenvolvedor Full-Stack</span> pronto para
                    construir projetos seguros, eficientes e atrativos.
                </p>

                <div className={styles.hero__ctas}>
                    <Button
                        label="Entre em contato"
                        color="primary"
                        onClick={() => navigateTo("contact")}
                    />
                    <a href="/public/files/almeida_curriculo.pdf" download>
                        <Button
                            label="Baixar CV"
                            color="ghostPrimary"
                            onClick={() => {}}
                        />
                    </a>
                </div>

                <div className={styles.hero__socialMedias}>
                    <a
                        href="https://github.com/GabAlmeyda"
                        aria-label="GitHub"
                        target="_blank"
                    >
                        <span aria-hidden="true">
                            <FaGithub />
                        </span>
                    </a>
                    <a
                        href="https://www.instagram.com/almeyda.dev"
                        aria-label="Instagram"
                        target="_blank"
                    >
                        <span aria-hidden="true">
                            <AiFillInstagram />
                        </span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/gabriel-almeyda/"
                        aria-label="LinkedId"
                        target="_blank"
                    >
                        <span aria-hidden="true">
                            <TbBrandLinkedinFilled />
                        </span>
                    </a>
                </div>
            </div>

            <div className={styles.hero__visual}>
                <div className={styles.imageContainer}>
                    <img src={heroImage} alt="Ideias" aria-hidden="true" />
                </div>
            </div>

            <div className={styles.hero__gradients}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        className={styles.gradients__gradient}
                        key={`hero__gradient-${index}`}
                    ></div>
                ))}
            </div>
        </Section>
    );
}

export default Hero;
