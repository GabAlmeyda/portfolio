import type { JSX } from "react";

import styles from "./Hero.module.css";
import { navigateTo } from "../utils/functions";

import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";

import Button from "../components/ui/Button";

/**
 * Renders the hero section of the website.
 * 
 * @returns {JSX.Element} A JSX element representing the hero section 
 * of the website.
 */
function Hero(): JSX.Element {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__content}>
                <h1 className={styles.hero__intro}>
                    Olá, me chamo <br /> <span>Gabriel Almeida</span>
                </h1>
                <p className={styles.hero__desc}>
                    Sou um <span>desenvolvedor Full-Stack</span> pronto para
                    construir projetos seguros, eficientes e atrativos.
                </p>

                <span className={styles.hero__cta}>
                    <Button
                        label="Entre em contato"
                        color="primary"
                        onClick={() => navigateTo("contact")}
                    />
                </span>

                <div className={styles.hero__socialMedias}>
                    <a href="https://github.com/GabAlmeyda" aria-label="GitHub" target="_blank">
                        <span aria-hidden="true">
                            <FaGithub />
                        </span>
                    </a>
                    <a href="https://www.instagram.com/almeyda.dev" aria-label="Instagram" target="_blank">
                        <span aria-hidden="true">
                            <AiFillInstagram />
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/gabriel-almeyda/" aria-label="LinkedId" target="_blank">
                        <span aria-hidden="true">
                            <TbBrandLinkedinFilled />
                        </span>
                    </a>
                </div>
            </div>

            <div className={styles.hero__gradient}></div>
        </section>
    );
}

export default Hero;
