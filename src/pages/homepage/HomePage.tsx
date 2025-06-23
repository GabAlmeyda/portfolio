import { useEffect, type JSX } from "react";

import HeroSection from "./HeroSection";
import AboutSection from './AboutSection';
import ProjectsSection from "./ProjectsSection";
import ToolsSection from "./ToolsSection";
import ContactSection from "./ContactSection";

/**
 * Renders the `Homepage` of the website. This page wrappes the section
 * components listed bellow:
 * - `HeroSection`.
 * - `AboutSection`.
 * - `ProjectsSection`.
 * - `ToolsSection`.
 * - `ContactSection`.
 * 
 * @returns {JSX.Element} A JSX element representing the `Homepage` of the
 * website.
 */
function Homepage(): JSX.Element {

    // Updates the <meta name="description"> for this specific page.
    useEffect(() => {
        let metaTag: HTMLMetaElement | null = document.querySelector(`meta[name=${"description"}]`);
        if (!metaTag) {
            metaTag = document.createElement("meta");
            metaTag.name = "description";
            document.head.appendChild(metaTag);
        }

        metaTag.content = "Explore meus projetos de desenvolvimento web e conheça minhas habilidades.";
    }, []);

    return (<>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ToolsSection />
        <ContactSection />
    </>)
}

export default Homepage;