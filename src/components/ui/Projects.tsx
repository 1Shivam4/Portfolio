import styled from "styled-components";
import { SectionWrapper } from "../styles/GlobalStyles";
import { Link } from "react-router-dom";

interface ProjectIntro {
  heading: string;
  intro: string;
  imgSrc: string;
}

const ProjectIntroProps: ProjectIntro[] = [
  {
    heading: "AI-Powered Diabetes Prediction",
    intro:
      "Developed a full-stack project using MERN and machine learning for my college. It predicts diabetes based on multiple input fields, with a user-friendly frontend and a robust backend.",
    imgSrc: "/assets/diabetes.JPG",
  },
  {
    heading: "FDC Innovation Labs",
    intro:
      "I developed the entire FDC Innovation Labs website myself, including the frontend, backend APIs, and admin panel, managing all aspects of the project end-to-end.",
    imgSrc: "/assets/fdc.png",
  },
  {
    heading: "CB Freelancers",
    intro:
      "Developed a full-stack freelance services platform for a startup, including user-facing frontend, backend APIs, and a robust admin panel.",
    imgSrc: "/assets/cbFreelance.png",
  },
];

export default function Projects() {
  return (
    <SectionWrapper className="relative z-10" id="projects">
      <h2 className="text-4xl font-bold text-slate-600 text-center">Projects</h2>
      <div className="mx-4 md:mx-24 flex justify-between align-middle flex-wrap relative z-10 pt-10">
        {ProjectIntroProps.map((projectIntro) => (
          <Link to={`/${projectIntro.heading}`} key={projectIntro.heading}>
            {" "}
            <BoxItem className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-red-100 hover:border-red-300">
              <img src={projectIntro.imgSrc} className="w-full bg-cover" />
              <div>
                <h3 className="text-center font-bold text-slate-600 text-xl">{projectIntro.heading}</h3>
                <p className="p-2 text-sm font-semibold text-slate-700 text-justify text-pretty">
                  {projectIntro.intro}
                </p>
              </div>
            </BoxItem>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}

const BoxItem = styled.div`
  height: 320px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;
