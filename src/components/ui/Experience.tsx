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
    title: "Software Engineer Trainee",
    company: "Acroknacks Pvt. Ltd.",
    location: "Dehradun, Uttarakhand, India",
    startDate: "2022-Jan-02",
    endDate: "2024-May-02",
  },
  {
    title: "Backend Developer",
    company: "Sartha",
    location: "Gujarat, India (Remote)",
    startDate: "2024-Jan-02",
    endDate: "2024-April-02",
  },
];

const educationData: EducationProps[] = [
  {
    course: "Bachelor of Computer Application",
    institute:
      "Shri Guru Ram Rai University (School of Engineering and Technology)",
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
    <div
      className="w-full py-10 bg-slate-100 px-4 md:px-32 flex justify-between align-middle flex-wrap relative z-10 "
      id="experience"
    >
      <EduExprCard data={experinceData} heading="Experience" />
      <EduExprCard data={educationData} heading="Education" />
    </div>
  );
}

type CardItem = ExperienceProps | EducationProps;

interface EducationCardProps {
  data: CardItem[];
  heading: string;
}

const EduExprCard: React.FC<EducationCardProps> = ({ data, heading }) => {
  return (
    <div className="w-full md:w-1/2">
      <h2 className="my-5 text-2xl md:text-4xl font-bold text-slate-600 text-center md:text-start">
        {heading}
      </h2>
      {data.map((item, idx) => (
        <div
          key={idx}
          className="my-5 m-auto flex  gap-5 md:gap-10 align-middle"
        >
          <span className="mt-1 h-5 w-5 rounded-full border-2 border-rose-600"></span>
          <div>
            {"course" in item ? (
              <>
                <h3 className="text-lg md:text-2xl font-bold">{item.course}</h3>
                <p className="text-base md:text-lg text-gray-600">
                  {item.institute}
                </p>
              </>
            ) : (
              <>
                <h3 className="text-lg md:text-2xl font-bold">{item.title}</h3>
                <p className="text-base md:text-lg text-gray-600">
                  {item.company}
                </p>
              </>
            )}
            <p className="text-base md:text-lg text-gray-600">
              {item.location}
            </p>
            {item.startDate && (
              <p className="text-base md:text-lg text-gray-600">
                {item.startDate} - {item.endDate}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
