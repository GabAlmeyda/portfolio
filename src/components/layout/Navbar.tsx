import { useState, type JSX } from "react";

import styles from "./Navbar.module.css";
import { navigateTo } from "../../utils/functions";

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import useIsMobile from "../../hooks/useIsMobile";

interface NavbarProps {
    onMenuClick: (isOpen: boolean) => void;
    links: Record<string, string>;
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
 * @param {object} props.links - An object where the keys are the label and the values are the links.
 *
 * @returns {JSX.Element} A JSX element representing a responsible navigation bar.
 */
function Navbar({ onMenuClick, links }: NavbarProps): JSX.Element {
    const isMobile = useIsMobile(768);
    const [isOpen, setIsOpen] = useState(isMobile ? false : true);

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
        if (isMobile) onMenuClick(!isOpen);
    };

    return (
        <nav className={`${styles.navbar} ${isOpen && isMobile ? styles.isOpen : ""}`}>
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
                    isOpen && isMobile ? styles.isOpen : ""
                }`}
                id="navbar__links"
            >
                {Object.entries(links).map(([label, id]) => (
                    <li
                        className={styles.navbar__link}
                        key={`li-${label}`}
                        onClick={isMobile ? toggleMenu : undefined}
                    >
                        <a
                            href="#"
                            target="_self"
                            onClick={(e) => { e.preventDefault();  navigateTo(id)}}
                        >
                            {label}
                        </a>
                    </li>
                ))}
                <div className={styles.navbar__gradients}>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            className={styles.gradients__gradient}
                            key={`navbar__gradient-${index}`}
                            style={{display: isOpen && isMobile ? "block" : "none"}}
                        ></div>
                    ))}
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;
