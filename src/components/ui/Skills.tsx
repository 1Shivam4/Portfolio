import { SectionWrapper } from "../styles/GlobalStyles";
import { skillsAndTools } from "../../data/allData.ts";

export default function Skills() {
  // Flatten all skills into a single array
  const allSkills = skillsAndTools.flatMap(category => 
    category.tools.map(tool => ({
      name: tool,
      category: category.skillName
    }))
  );

  return (
    <SectionWrapper
      className="section-padding relative overflow-hidden bg-white"
      id="skills"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-primary-600 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mb-16">
          {allSkills.map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className="group bg-primary-50 rounded-2xl p-6 text-center 
                       hover:bg-white hover:shadow-soft transition-all duration-300
                       border border-transparent hover:border-accent-purple/20
                       hover:scale-105 cursor-default animate-fade-in"
              style={{ animationDelay: `${idx * 0.02}s` }}
            >
              <p className="text-sm md:text-base font-semibold text-primary-800 group-hover:text-accent-purple transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsAndTools.map((category) => (
            <div
              key={category.skillName}
              className="bg-gradient-soft rounded-2xl p-6 border border-primary-100 
                       hover:shadow-soft transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-primary-900 mb-3">
                {category.skillName}
              </h3>
              <p className="text-sm text-primary-600 leading-relaxed">
                {category.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
