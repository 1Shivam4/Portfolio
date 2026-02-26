import { SectionWrapper } from "../styles/GlobalStyles";
import "../styles/css/basics.css";
import banner from "/assets/profile.jpg";

export default function Intro() {
  return (
    <SectionWrapper
      className="relative overflow-hidden bg-gradient-soft min-h-screen flex items-center pt-24 md:pt-32"
      id="home"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow opacity-60 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-glow opacity-40 blur-3xl" />

      <div className="mx-4 md:mx-24 flex justify-between flex-wrap-reverse md:flex-nowrap items-center gap-12 md:gap-20 relative z-10 w-full">
        {/* Text Content */}
        <div className="flex-1 animate-fade-in-up">
          <p className="text-base md:text-lg font-medium text-primary-500 mb-2">Hi there, I'm</p>

          <h1 className="font-bold text-5xl md:text-7xl text-primary-900 mb-6 leading-tight">Shivam Sahni</h1>

          <h2 className="text-2xl md:text-4xl font-bold text-primary-700 mb-6">Software Engineer</h2>

          <p className="text-lg md:text-xl text-primary-600 mb-4 max-w-xl leading-relaxed">
            Specializing in <span className="text-accent-purple font-semibold">Full-Stack Development</span>,
            <span className="text-accent-purple font-semibold"> Scalable Backend Systems</span>, and
            <span className="text-accent-purple font-semibold"> AI-Powered Products</span>
          </p>

          <p className="text-base md:text-lg text-primary-500 mb-10 max-w-xl">
            I build scalable web applications and SaaS platforms — from robust backend APIs to polished user interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group px-8 py-4 rounded-full bg-accent-purple text-white font-semibold 
                       shadow-soft hover:shadow-glow transition-all duration-300 
                       hover:scale-105 active:scale-95"
            >
              Get In Touch
            </a>

            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-accent-purple font-semibold 
                       border-2 border-accent-purple shadow-soft
                       hover:bg-accent-purple hover:text-white transition-all duration-300
                       hover:scale-105 active:scale-95"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 max-w-md animate-fade-in">
          <div className="relative">
            {/* Decorative glow behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-purple/20 via-accent-pink/20 to-accent-blue/20 rounded-3xl blur-2xl opacity-60" />

            <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border-4 border-white">
              <img src={banner} alt="Shivam Sahni" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
