import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FlexCol, SectionWrapper } from "../styles/GlobalStyles";
import { useParams } from "react-router-dom";

interface ProjectDesc {
  heading: string;
  img: string;
  desc: string;
  projectLink?: string;
  techStack: string[];
}

const ProjectDescProps: ProjectDesc[] = [
  {
    heading: "CB Freelancers",
    img: "/assets/cbFreelance.png",
    desc: "Developed a full-stack freelance services platform for a startup, including user-facing frontend, backend APIs, and a robust admin panel. The system supports dynamic service listings, user management, and secure authentication. Built with scalable architecture and modern tools to ensure maintainability and performance.",
    projectLink: "https://cbfreelancers.com/",
    techStack: ["TypeScript", "React", "Tailwind CSS", "Node.js", "Mongo Db"],
  },
];

export default function ProjectDetails() {
  const projectParams = useParams();
  const [prjDetails, setPrjDetails] = useState<ProjectDesc | null>(null);

  useEffect(() => {
    const project = ProjectDescProps.find((prj) => prj.heading === projectParams.projectName);
    setPrjDetails(project || null);
  }, [projectParams]);

  return (
    <>
      {prjDetails ? (
        <SectionWrapper>
          <Helmet>
            <title>{prjDetails.heading} — Shivam Sahni</title>
            <meta
              name="description"
              content={`${prjDetails.heading} — a project by Shivam Sahni. Tech stack: ${prjDetails.techStack.join(", ")}.`}
            />
          </Helmet>
          <FlexCol className="mx-4 md:mx-24 flex-wrap items-center">
            <div className="flex justify-center items-center">
              <img src={prjDetails.img} className="p-2 w-full md:w-1/2 object-contain" />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-slate-700">{prjDetails.heading}</h2>
            <p className="mt-2 md:w-1/2 text-center  text-slate-600">{prjDetails.desc}</p>
            <div className="mt-4">
              <strong>Tech Stack:</strong> {prjDetails.techStack.join(", ")}
            </div>
            <a href={prjDetails.projectLink} target="blank" className="my-5 text-red-500 underline font-bold ">
              Project Link
            </a>
          </FlexCol>
        </SectionWrapper>
      ) : (
        <Error message="Project Not Found" />
      )}
    </>
  );
}
interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="p-0 h-[80vh] flex justify-center">
      <FlexCol className="justify-center items-center">
        <img src="/assets/404.jpeg" className="h-64" />
        <h3 className="font-bold text-slate-600 text-xl">{message}</h3>
      </FlexCol>
    </div>
  );
};
