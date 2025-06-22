import type { JSX } from "react";

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

    return (<>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ToolsSection />
        <ContactSection />
    </>)
}

export default Homepage;