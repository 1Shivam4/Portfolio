import { Fragment } from "react/jsx-runtime";
import Intro from "../components/ui/Intro";
import Skills from "../components/ui/Skills";
import Experience from "../components/ui/Experience";
import Contact from "../components/ui/Contact";
import Projects from "../components/ui/Projects";

function Landing() {
  return (
    <Fragment>
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </Fragment>
  );
}
export default Landing;
