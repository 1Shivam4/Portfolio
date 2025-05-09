import { Fragment } from "react/jsx-runtime";
import Intro from "../components/ui/Intro";
import Skills from "../components/ui/Skills";
import Experience from "../components/ui/Experience";

function Landing() {
  return (
    <Fragment>
      <Intro />
      <Skills />
      <Experience />
    </Fragment>
  );
}
export default Landing;
