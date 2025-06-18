import type { JSX } from "react";

import styles from './NotFoundPage.module.css';

function NotFoundPage(): JSX.Element {

    return <div className={styles.notFound}>
        <h1>Not Found Page</h1>
    </div>
}

export default NotFoundPage;