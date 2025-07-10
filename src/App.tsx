import "./App.css";

import Page from "./components/layout/Page";
import Hero from "./page/Hero";
import About from "./page/About";
import Contact from "./page/Contact";
import Tools from "./page/Tools";

function App() {
    return (
        <Page>
            <Hero />
            <About />
            <Tools />
            <Contact />
        </Page>
    );
}

export default App;