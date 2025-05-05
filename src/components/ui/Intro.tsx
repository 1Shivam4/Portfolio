import { SectionWrapper } from "../styles/GlobalStyles";
import WordRotator from "./WordRotate";
import { Button } from "./Button";
import "../styles/css/basics.css";
import banner from "/assets/home-banner.png";

const services = [
  "Web Development",
  "Software Design & Development",
  "Deployment",
  "Internet of Things (IoT)",
  "Artificial Intelligence & Machine Learning",
  "Design & Creation",
  "Video Editing & Photography",
  "Cinematography",
];

export default function Intro() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      <div className="mx-4 md:mx-24 flex justify-center items-center gap-20">
        <div className="pr-24">
          <p className="my-2 font-bold text-xl ">Hi There, I'm</p>
          <h2 className="font-bold text-5xl">Shivam Sahni</h2>
          <div className="w-32  border-b-4 border-red-600"></div>
          <div className="text-primary whitespace-pre-wrap leading-relaxed w-full max-w-xl font-extrabold text-3xl my-3 shadow-sm">
            <span className="text-slate-600">Services I provide</span>
            <span className=" text-red-500">
              <WordRotator words={services} />
            </span>
          </div>
          <div className="text-2xl font-medium text-slate-500">
            The dynamics of how users interact with interactive elements within
            a user interface flow chart based on container proportion.
          </div>
          <Button name="Contact Me" />
        </div>
        <div className="w-5/6">
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
