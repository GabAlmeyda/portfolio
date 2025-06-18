import type { JSX } from "react";

import styles from './components/layout/Footer.module.css';

function Footer(): JSX.Element {
    return (
        <footer className={styles.footer}>
            <p>
                <small>
                    Feito por{" "}
                    <span className={styles.author}><a href="" target="_blank">Gabriel Almeida</a></span>
                </small>
            </p>
        </footer>
    );
}

export default Footer;
