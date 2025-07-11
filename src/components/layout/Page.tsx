import { useState, type JSX, type ReactNode } from "react";

import styles from "./Page.module.css";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";

interface PageProps {
    children: ReactNode;
}

const NAVBAR_LINKS = {
    Sobre: "about",
    Habilidades: "tools",
    Contato: "contact",
} as const;

/**
 * Renders a page layout component that wraps its children in a styled container.
 *
 * This component renders others two components: `Navbar` before the passed `"children"`,
 * and `Footer`, after the passed `"children"`.
 *
 * @param {Object} props - The properties of the component.
 * @param {ReactNode} props.children - The content to be displayed within the `Main`
 * component.
 *
 * @returns {JSX.Element} A JSX element representing the page layout.
 */
function Page({ children }: PageProps): JSX.Element {
    const [navbarIsOpen, setNavbarIsOpen] = useState(false);

    const toggleScrollLock = (isOpen: boolean) => {
        setNavbarIsOpen(isOpen);
    }

    return (
        <div className={`${styles.page} ${navbarIsOpen ? styles.navbar_isOpen : ""}`}>
            <Navbar onMenuClick={toggleScrollLock} links={NAVBAR_LINKS}/>
            <Main>{children}</Main>
            <Footer />
        </div>
    );
}

export default Page;
