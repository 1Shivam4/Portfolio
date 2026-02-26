import { Fragment } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import Intro from "../components/ui/Intro";
import Skills from "../components/ui/Skills";
import Experience from "../components/ui/Experience";
import Contact from "../components/ui/Contact";
import Projects from "../components/ui/Projects";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shivam Sahni",
  url: "https://1shivam4.github.io/Portfolio/",
  image: "https://1shivam4.github.io/Portfolio/assets/profile.jpg",
  jobTitle: "Full Stack Engineer",
  worksFor: {
    "@type": "Organization",
    name: "FDC Innovation Labs",
  },
  sameAs: [
    "https://www.linkedin.com/in/shivam-sahni-132354227/",
    "https://github.com/1Shivam4",
    "https://x.com/ShivamS89244907",
  ],
  knowsAbout: [
    "Full Stack Development",
    "React.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "AWS Bedrock",
    "BullMQ",
    "SaaS",
  ],
};

function Landing() {
  return (
    <Fragment>
      <Helmet>
        <title>Shivam Sahni — Full Stack Engineer</title>
        <meta
          name="description"
          content="Full Stack Engineer specializing in scalable SaaS platforms, backend systems, and AI-powered products. View my projects and experience."
        />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Helmet>
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </Fragment>
  );
}
export default Landing;
