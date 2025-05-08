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
    <SectionWrapper className="relative overflow-hidden z-10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My Skills</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Technologies and tools I work with on a daily basis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsAndTools.map((skill) => (
            <div
              key={skill.skillName}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                  {skill.skillName}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
                  {skill.note}
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
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
