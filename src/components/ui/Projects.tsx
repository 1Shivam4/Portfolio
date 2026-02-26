import { SectionWrapper } from "../styles/GlobalStyles";
import { Link } from "react-router-dom";

interface ProjectIntro {
  heading: string;
  intro: string;
  imgSrc: string;
  color: string;
}

const ProjectIntroProps: ProjectIntro[] = [
  {
    heading: "AI-Powered Diabetes Prediction",
    intro:
      "Developed a full-stack project using MERN and machine learning for my college. It predicts diabetes based on multiple input fields, with a user-friendly frontend and a robust backend.",
    imgSrc: "/assets/diabetes.JPG",
    color: "pastel-blue",
  },
  {
    heading: "FDC Innovation Labs",
    intro:
      "I developed the entire FDC Innovation Labs website myself, including the frontend, backend APIs, and admin panel, managing all aspects of the project end-to-end.",
    imgSrc: "/assets/fdc.png",
    color: "pastel-green",
  },
  {
    heading: "CB Freelancers",
    intro:
      "Developed a full-stack freelance services platform for a startup, including user-facing frontend, backend APIs, and a robust admin panel.",
    imgSrc: "/assets/cbFreelance.png",
    color: "pastel-lavender",
  },
];

export default function Projects() {
  const [heroProject, ...otherProjects] = ProjectIntroProps;

  return (
    <SectionWrapper className="section-padding relative bg-gradient-soft" id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-primary-600 max-w-2xl mx-auto">
            A selection of projects I've built from concept to deployment
          </p>
        </div>

        {/* Hero Project */}
        {heroProject && (
          <Link to={`/${heroProject.heading}`} className="block mb-12 group">
            <div
              className={`bg-${heroProject.color} rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg 
                       transition-all duration-500 hover:scale-[1.02]`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 p-8 md:p-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 
                               group-hover:text-accent-purple transition-colors">
                    {heroProject.heading}
                  </h3>
                  <p className="text-base md:text-lg text-primary-700 leading-relaxed mb-6">
                    {heroProject.intro}
                  </p>
                  <div className="inline-flex items-center text-accent-purple font-semibold gap-2 
                                group-hover:gap-4 transition-all">
                    View Project
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                <div className="order-1 md:order-2 h-64 md:h-96">
                  <img
                    src={heroProject.imgSrc}
                    alt={heroProject.heading}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <Link
              key={project.heading}
              to={`/${project.heading}`}
              className="group block"
            >
              <div
                className={`bg-${project.color} rounded-3xl overflow-hidden shadow-soft 
                         hover:shadow-soft-lg transition-all duration-500 
                         hover:scale-105 h-full flex flex-col`}
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.imgSrc}
                    alt={project.heading}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3 
                               group-hover:text-accent-purple transition-colors">
                    {project.heading}
                  </h3>
                  <p className="text-sm md:text-base text-primary-700 leading-relaxed mb-4 flex-1">
                    {project.intro}
                  </p>
                  <div className="inline-flex items-center text-accent-purple font-semibold gap-2 
                                group-hover:gap-4 transition-all">
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
