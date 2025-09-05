import { SectionWrapper } from "../styles/GlobalStyles";
import WordRotator from "./WordRotate";
import "../styles/css/basics.css";
import banner from "/assets/home-banner.jpeg";

const services = ["AWS", "Cloud Computing", "DevOps", "Software Development"];

export default function Intro() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-slate-100">
      <div className="mx-4 md:mx-24 flex justify-center flex-wrap-reverse md:flex-nowrap items-center gap-10 md:gap-20">
        <div className="md:pr-24">
          <p className="md:my-2 font-bold text-xl ">Hi There, I'm</p>
          <h2 className="font-bold text-4xl md:text-5xl">Shivam Sahni</h2>

          <div className="w-32  border-b-4 border-red-600"></div>
          <div className="text-primary whitespace-pre-wrap leading-relaxed w-full max-w-xl font-extrabold text-2xl md:text-3xl my-3 shadow-sm">
            <span className="text-slate-600">What I can Do?</span>
            <span className=" text-red-500">
              <WordRotator words={services} />
            </span>
          </div>

          <div className="text-lg md:text-2xl font-medium text-slate-500 mb-10 ">
            I’m a Software Engineer who builds, breaks, and reimagines technology to create impactful digital solutions.
          </div>

          {/* <Button name="Contact Me" /> */}
          <a
            href="mailto:shivamsahni507@gmail.com"
            className="my-3 p-3 px-10 rounded-md text-white font-semibold relative overflow-hidden 
             bg-red-500 transition-all duration-500 ease-in-out 
             before:content-[''] before:absolute before:top-0 before:left-0 
             before:w-0 before:h-full before:bg-red-600 before:z-0 
             before:transition-all before:duration-500 hover:before:w-full z-10"
          >
            <span className="relative z-10">Contact Me</span>
          </a>
        </div>

        <div className="w-full md:w-5/6">
          <div className="img-container">
            <div className="relative z-10 overflow-hidden inner-img-container flex align-middle justify-center">
              <img src={banner} />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
