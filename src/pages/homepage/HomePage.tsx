import type { JSX } from "react";

import HeroSection from "./HeroSection";
import AboutSection from './AboutSection';

function Homepage(): JSX.Element {

    return (<>
        <HeroSection />
        <AboutSection />
    </>)
}

export default Homepage;