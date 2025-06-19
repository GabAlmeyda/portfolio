import type { JSX } from "react";

import styles from './LinkButton.module.css';

import { WEBSITE_URLS } from "../../utils/constants";
import type { projectsInfo } from "../../utils/projectsInfo";


import { Link } from "react-router-dom";


type ProjectID = (typeof projectsInfo[number])["id"];
type validProjectsPaths = `/projects/${ProjectID}`;
type ValidWebsiteURLS = keyof typeof WEBSITE_URLS | validProjectsPaths;
type ValidColors = "primary" | "secondary" | "ghostPrimary" | "ghostSecondary";

interface LinkButtonProps {
    label: string;
    to: ValidWebsiteURLS;
    color: ValidColors;
}

/**
 * Renders a custom button for navigation between pages.
 * 
 * @param {Object} props - The properties of the component.
 * @param {string} props.label - The text to be displayed within the button.
 * @param {ValidWebsiteURLS} props.to - The page destination of the navigation.
 * @param {ValidColors} props.color - The color of the button.
 *  
 * @returns {JSX.Element} A JSX element representing the custom button for navigation.
 */
function LinkButton({label, to, color}: LinkButtonProps): JSX.Element {
    return <Link to={to} className={`${styles.linkButton} ${styles[color]}`} type="button">
        {label}
    </Link>
}

export default LinkButton;