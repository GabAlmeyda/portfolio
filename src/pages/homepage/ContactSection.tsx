import type { JSX } from "react";

import styles from "./ContactSection.module.css";
import LinkButton from "../../components/ui/LinkButton";

/**
 * Renders the contact section of the `Homepage` component.
 *
 * @returns {JSX.Element} A JSX element representing the contact section
 * of the `Homepage` component.
 */
function ContactSection(): JSX.Element {
    return (
        <section className={styles.contact}>
            <div className={styles.contact__content}>
                <h2>Vamos trabalhar juntos</h2>
                <p>
                    Tem um projeto em mente? Vamos conversar e descobrir como
                    posso te ajudar!
                </p>

                <LinkButton
                    label="Entre em contato"
                    color="primary"
                    to="contact"
                />
            </div>
            <div className={styles.contact__gradients}>
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        className={styles.gradients__gradient}
                        key={`gradient-${index}`}
                    ></div>
                ))}
            </div>
        </section>
    );
}

export default ContactSection;
