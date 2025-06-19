import type { JSX } from "react";

import styles from './HomePage.module.css';

import HeroSection from "./HeroSection";
import AboutSection from './AboutSection';
import ProjectsSection from "./ProjectsSection";

function Homepage(): JSX.Element {

    return (<div className={styles.homepage}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
    </div>)
}

export default Homepage;