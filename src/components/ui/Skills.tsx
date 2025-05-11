import { SectionWrapper } from "../styles/GlobalStyles";
import { skillsAndTools } from "../../data/allData.ts";

export default function Skills() {
  return (
    <SectionWrapper className="relative overflow-hidden z-10 py-16" id="skills">
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
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-slate-50 text-gray-900 border border-orange-200 hover:bg-red-200 transition-colors"
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
    </SectionWrapper>
  );
}
