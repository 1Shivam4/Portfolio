import styled from "styled-components";
import { FlexCol, FlexRow, SectionWrapper } from "../styles/GlobalStyles";
import AboutMe from "/assets/about-me.png";

interface Skills {
  skillName: string;
  tools: string[];
}

const skillsAndTools: Skills[] = [
  {
    skillName: "Design Tools",
    tools: ["Figma", "Canva", "Draw.io", "Sketch"],
  },
  {
    skillName: "Technologies and Skills",
    tools: [
      "Typescript",
      "Python",
      "Data Analytics",
      "React",
      "NodeJS",
      "MongoDB",
      "MySQL",
      "Google Cloud",
      "Networking",
    ],
  },
  {
    skillName: "Development Tools",
    tools: [
      "VSCode",
      "Cursor AI",
      "PyCharm IDE",
      "Git",
      "Github",
      "Linux/Unix",
    ],
  },
  {
    skillName: "AI tools",
    tools: ["ChatGPT", "Deep-seek ", "Claude", "Gemini"],
  },
];

export default function Skills() {
  return (
    <SectionWrapper className="overflow-hidden">
      <div className="mx-4 md:mx-24 flex justify-between  items-center  flex-wrap gap-2">
        <Avatar className="w-full md:w-40p">
          <img src={AboutMe} />
        </Avatar>
        <FlexCol className="w-full md:w-60p">
          <div>
            <HeadingH3>About Me</HeadingH3>
            <p className="text-justify">
              Hi, I'm Shivam, a software engineer with expertise in the MERN
              stack (MongoDB, Express.js, React, Node.js). I'm skilled in
              building full-stack web applications and comfortable working with
              a wide range of technologies beyond the MERN stack. I have
              hands-on experience in backend development, RESTful APIs, database
              design, and scalable architectures.
            </p>
          </div>

          <ul>
            {skillsAndTools.map((skill) => (
              <div key={skill.skillName} className="my-5">
                <HeadingH3>{skill.skillName}</HeadingH3>

                <FlexRow className="gap-4 flex-wrap">
                  {skill.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </FlexRow>
              </div>
            ))}
          </ul>
        </FlexCol>
      </div>
    </SectionWrapper>
  );
}

const Avatar = styled.div`
  width: 330px;
`;
const HeadingH3 = styled.h3`
  font-size: 20px;
  font-weight: 700;
`;
