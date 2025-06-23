import type { JSX } from "react";

import styles from "./Footer.module.css";

/**
 * Renders a custom footer for the website.
 * 
 * @returns {JSX.Element} A JSX element representing the custom footer.
 */
function Footer(): JSX.Element {
    return (
        <footer className={styles.footer}>
            <p>
                <small>
                    Feito por{" "}
                    <span className={styles.author}>
                        <a
                            href="https://www.instagram.com/almeyda.dev"
                            target="_blank"
                        >
                            Gabriel Almeida
                        </a>
                    </span>
                </small>
            </p>
        </footer>
    );
}

export default Footer;
