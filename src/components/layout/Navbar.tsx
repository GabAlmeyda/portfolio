import { useState, type JSX } from "react";
import { Link } from "react-router-dom";

import { WEBSITE_URLS } from "../../utils/constants";

import styles from "./components/layout/Navbar.module.css";

import { TbCircleLetterAFilled } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const NAVBAR_LINKS = {
    Home: WEBSITE_URLS.home,
    Projetos: WEBSITE_URLS.projects,
    Ferramentas: WEBSITE_URLS.tools,
    Contato: WEBSITE_URLS.contact,
};

interface NavbarProps {
    onMenuClick: (isOpen: boolean) => void;
}

/**
 * Renders a responsible navigation bar component. On smaller screens, the navigation collapses
 * into a hamburguer menu. On bigger screens, it expands into a horizontal menu.
 * 
 * @param {Object} props - The properties of the component.
 * @param {Function} props.onMenuClick - The function to handle the menu click event. This
 * function should be used to lock and unlock the scroll of the parent element, avoiding the
 * scroll when the navigation bar is open. This fucntion is called passing the boolean state
 * of the navigation bar: `true` if open; `false` is closed.
 *
 * @returns {JSX.Element} A JSX element representing a responsible navigation bar.
 */
function Navbar({onMenuClick}: NavbarProps): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
        onMenuClick(!isOpen);
    };

    return (
        <nav
            className={`${styles.navbar} ${isOpen ? styles.isOpen : ""}`}
        >
            <div
                className={styles.navbar__logo}
                onClick={() => setIsOpen(false)}
            >
                <Link
                    to={WEBSITE_URLS.home}
                    aria-label="Voltar para página inicial"
                >
                    <TbCircleLetterAFilled />
                </Link>
            </div>

            <button
                className={styles.menu__icon}
                aria-label="Abrir ou fechar menu"
                aria-controls="navbar__links"
                onClick={toggleMenu}
            >
                {isOpen ? <IoClose /> : <IoMenu />}
            </button>

            <ul
                className={`${styles.navbar__links} ${
                    isOpen ? styles.isOpen : ""
                }`}
                id="navbar__links"
            >
                {Object.entries(NAVBAR_LINKS).map(([label, url]) => (
                    <li className={styles.navbar__link} key={`li-${label}`}>
                        <Link to={url}>{label}</Link>
                    </li>
                ))}
                <div
                    className={styles.navbar__gradient}
                    style={{ display: isOpen ? "block" : "none" }}
                ></div>
            </ul>
        </nav>
    );
}

export default Navbar;
