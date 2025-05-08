import { SectionWrapper } from "../styles/GlobalStyles";
import StereoScene from "./animations/StereoScreen";

interface Skills {
  skillName: string;
  tools: string[];
  note: string;
}

const skillsAndTools: Skills[] = [
  {
    skillName: "Technologies and Skills",
    tools: [
      "Typescript",
      "Python",
      "React",
      "NodeJS",
      "MongoDB",
      "MySQL",
      "Data Analytics",
      "Google Cloud",
      "Networking",
    ],
    note: "Proficient in full-stack development and data analytics, with hands-on experience in building scalable web applications and leveraging cloud infrastructure.",
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
    note: "Comfortable with modern development environments and version control systems, ensuring efficient and collaborative workflows.",
  },
  {
    skillName: "AI tools",
    tools: ["ChatGPT", "Deep-seek", "Claude", "Gemini"],
    note: "Actively use AI tools for research, automation, rapid prototyping, and enhancing productivity across development and content generation tasks.",
  },
  {
    skillName: "Design Tools",
    tools: ["Figma", "Canva", "Draw.io", "Sketch"],
    note: "Skilled in creating clean UI/UX designs, wireframes, and system diagrams to communicate and visualize ideas effectively.",
  },
];

export default function Skills() {
  return (
    <SectionWrapper className="relative overflow-hidden z-10 py-16 bg-red-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">My Skills</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Technologies and tools I work with regularly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsAndTools.map((skill) => (
            <div
              key={skill.skillName}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-red-100 hover:border-red-300"
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                  {skill.skillName}
                </h3>
                <p className="text-gray-700 mb-6 text-center">{skill.note}</p>

                <div className="flex flex-wrap gap-3 justify-center">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-gray-900 border border-orange-200 hover:bg-red-200 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <StereoScene />
    </SectionWrapper>
  );
}
