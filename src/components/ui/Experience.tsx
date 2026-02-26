import { SectionWrapper } from "../styles/GlobalStyles";

interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  startDate?: string;
  endDate?: string;
}

interface EducationProps {
  course: string;
  institute: string;
  location: string;
  startDate?: string;
  endDate?: string;
}

const experinceData: ExperienceProps[] = [
  {
    title: "Software Engineer",
    company: "FDC Innovation Labs",
    location: "Hybrid",
    startDate: "May 2024",
    endDate: "Present",
  },
  {
    title: "Software Engineer Trainee",
    company: "iResonate",
    location: "On Premises",
    startDate: "Jan 2024",
    endDate: "May 2024",
  },
];

const educationData: EducationProps[] = [
  {
    course: "Bachelor of Computer Application",
    institute: "Shri Guru Ram Rai University (School of Engineering and Technology)",
    location: "Dehradun, Uttarakhand, India",
  },
  {
    course: "Sr. Secondary School",
    institute: "Shri Guru Ram Rai Raja Road",
    location: "Dehradun, Uttarakhand, India",
  },
  {
    course: "Secondary School",
    institute: "Shri Guru Ram Rai Sahastradhara Road",
    location: "Dehradun, Uttarakhand, India",
  },
];

export default function Experience() {
  return (
    <SectionWrapper className="section-padding relative bg-white" id="experience">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <EduExprCard data={experinceData} heading="Experience" />
          <EduExprCard data={educationData} heading="Education" />
        </div>
      </div>
    </SectionWrapper>
  );
}

type CardItem = ExperienceProps | EducationProps;

interface EducationCardProps {
  data: CardItem[];
  heading: string;
}

const EduExprCard: React.FC<EducationCardProps> = ({ data, heading }) => {
  return (
    <div className="w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8">{heading}</h2>
      <div className="space-y-6">
        {data.map((item, idx) => (
          <div key={idx} className="flex gap-5 group">
            <div className="flex flex-col items-center">
              <span className="mt-1 h-4 w-4 rounded-full bg-accent-purple shadow-glow"></span>
              {idx < data.length - 1 && <div className="w-0.5 flex-1 bg-primary-200 mt-2"></div>}
            </div>
            <div className="pb-6 flex-1">
              {"course" in item ? (
                <>
                  <h3 className="text-lg md:text-xl font-bold text-primary-900 mb-1">{item.course}</h3>
                  <p className="text-sm md:text-base text-primary-600 mb-1">{item.institute}</p>
                </>
              ) : (
                <>
                  <h3 className="text-lg md:text-xl font-bold text-primary-900 mb-1">{item.title}</h3>
                  <p className="text-sm md:text-base text-primary-600 mb-1">{item.company}</p>
                </>
              )}
              <p className="text-sm text-primary-500">{item.location}</p>
              {item.startDate && (
                <p className="text-sm text-primary-500 mt-1">
                  {item.startDate} - {item.endDate}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
