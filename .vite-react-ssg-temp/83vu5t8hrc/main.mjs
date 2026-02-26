import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { ViteReactSSG } from "vite-react-ssg/single-page";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faLinkedin, faTwitter, faInstagram, faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams, BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, Fragment as Fragment$1 } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
library.add(
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
  faDiscord,
  faBars,
  faXmark
);
const SectionWrapper = styled.section`
  min-height: 90vh;
  padding: 50px 0px;
`;
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
styled.div`
  display: flex;
  flex-direction: row;
`;
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const navItems = [
  {
    name: "About",
    route: "home"
  },
  {
    name: "Skills",
    route: "skills"
  },
  {
    name: "Experience",
    route: "experience"
  },
  {
    name: "Projects",
    route: "projects"
  },
  {
    name: "Contact",
    route: "contact"
  }
];
const socialLinks = [
  { icon: "github", url: "https://github.com/shivamsahni", brand: true },
  { icon: "linkedin", url: "https://linkedin.com/in/shivamsahni", brand: true },
  { icon: "envelope", url: "mailto:shivamsahni507@gmail.com", brand: false }
];
function Navbar() {
  const [isSidebar, setSideBar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const handleSidebar = () => {
    setSideBar((prev) => !prev);
  };
  useEffect(() => {
    if (isSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebar]);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map((item) => item.route);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    "nav",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "mx-4 md:mx-24 flex justify-between items-center", children: [
        /* @__PURE__ */ jsx("a", { href: "#home", className: "font-bold text-xl md:text-2xl text-primary-900 hover:text-accent-purple transition-colors", children: "Shivam Sahni" }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:flex absolute left-1/2 transform -translate-x-1/2", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: `flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-300 ${scrolled ? "glass shadow-soft border border-primary-200/50" : "bg-white/60 backdrop-blur-sm"}`,
            children: navItems.map((el) => /* @__PURE__ */ jsx(
              "a",
              {
                href: `#${el.route}`,
                className: `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === el.route ? "bg-accent-purple text-white" : "text-primary-600 hover:text-accent-purple hover:bg-primary-50"}`,
                children: el.name
              },
              el.name
            ))
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-4", children: socialLinks.map((link, idx) => /* @__PURE__ */ jsx(
          "a",
          {
            href: link.url,
            target: link.url.startsWith("http") ? "_blank" : void 0,
            rel: link.url.startsWith("http") ? "noopener noreferrer" : void 0,
            className: "w-10 h-10 flex items-center justify-center rounded-full bg-primary-50 text-primary-600 hover:bg-accent-purple hover:text-white transition-all duration-300",
            children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: link.brand ? ["fab", link.icon] : link.icon, className: "text-lg" })
          },
          idx
        )) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-primary-50 text-primary-900 hover:bg-accent-purple hover:text-white transition-all",
            onClick: handleSidebar,
            children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: "bars" })
          }
        ),
        isSidebar && /* @__PURE__ */ jsx(Sidebar, { handleSidebar, activeSection })
      ] })
    }
  );
}
const Sidebar = ({ handleSidebar, activeSection }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-fade-in",
        onClick: handleSidebar
      }
    ),
    /* @__PURE__ */ jsxs(FlexCol, { className: "fixed top-0 right-0 min-h-screen w-3/4 max-w-xs bg-white shadow-soft-lg z-50 p-6 space-y-6 animate-slide-in", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        "button",
        {
          className: "w-10 h-10 flex items-center justify-center rounded-lg bg-primary-50 text-primary-900 hover:bg-accent-purple hover:text-white transition-all",
          onClick: handleSidebar,
          children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: "xmark", className: "text-xl" })
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-2", children: navItems.map((el) => /* @__PURE__ */ jsx(
        "a",
        {
          href: `#${el.route}`,
          className: `px-4 py-3 rounded-lg text-base font-medium transition-all ${activeSection === el.route ? "bg-accent-purple text-white" : "text-primary-700 hover:bg-primary-50"}`,
          onClick: handleSidebar,
          children: el.name
        },
        el.name
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-primary-100", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-primary-500 mb-3", children: "Connect" }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-3", children: socialLinks.map((link, idx) => /* @__PURE__ */ jsx(
          "a",
          {
            href: link.url,
            target: link.url.startsWith("http") ? "_blank" : void 0,
            rel: link.url.startsWith("http") ? "noopener noreferrer" : void 0,
            className: "w-10 h-10 flex items-center justify-center rounded-full bg-primary-50 text-primary-600 hover:bg-accent-purple hover:text-white transition-all",
            children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: link.brand ? ["fab", link.icon] : link.icon })
          },
          idx
        )) })
      ] })
    ] })
  ] });
};
const iconMap = {
  faFacebook,
  faTwitter,
  faDiscord,
  faLinkedin,
  faInstagram
};
const social = [
  {
    link: "https://www.facebook.com/shivam.sahni.739326",
    icon: "faFacebook"
  },
  {
    link: "https://www.instagram.com/_sahnishivam/",
    icon: "faInstagram"
  },
  {
    link: "https://x.com/ShivamS89244907",
    icon: "faTwitter"
  },
  {
    link: "https://www.linkedin.com/in/shivam-sahni-132354227/",
    icon: "faLinkedin"
  }
];
function Footer() {
  return /* @__PURE__ */ jsxs(FlexDiv, { className: "mx-4 md:mx-24 py-5 bg-white border-1", children: [
    /* @__PURE__ */ jsx("ul", { className: "flex gap-4", children: social.map((soci, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: soci.link, children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: iconMap[soci.icon], className: "text-slate-700 hover:text-red-600" }) }) }, i)) }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Copyright © ",
      (/* @__PURE__ */ new Date()).getFullYear()
    ] })
  ] });
}
function MainNavigation({ children }) {
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx(Navbar, {}) }),
    /* @__PURE__ */ jsx("main", { children }),
    /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsx(Footer, {}) })
  ] });
}
const banner = "/assets/profile.jpg";
function Intro() {
  return /* @__PURE__ */ jsxs(
    SectionWrapper,
    {
      className: "relative overflow-hidden bg-gradient-soft min-h-screen flex items-center pt-24 md:pt-32",
      id: "home",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow opacity-60 blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-glow opacity-40 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "mx-4 md:mx-24 flex justify-between flex-wrap-reverse md:flex-nowrap items-center gap-12 md:gap-20 relative z-10 w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1 animate-fade-in-up", children: [
            /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg font-medium text-primary-500 mb-2", children: "Hi there, I'm" }),
            /* @__PURE__ */ jsx("h1", { className: "font-bold text-5xl md:text-7xl text-primary-900 mb-6 leading-tight", children: "Shivam Sahni" }),
            /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl font-bold text-primary-700 mb-6", children: "Software Engineer" }),
            /* @__PURE__ */ jsxs("p", { className: "text-lg md:text-xl text-primary-600 mb-4 max-w-xl leading-relaxed", children: [
              "Specializing in ",
              /* @__PURE__ */ jsx("span", { className: "text-accent-purple font-semibold", children: "Full-Stack Development" }),
              ",",
              /* @__PURE__ */ jsx("span", { className: "text-accent-purple font-semibold", children: " Scalable Backend Systems" }),
              ", and",
              /* @__PURE__ */ jsx("span", { className: "text-accent-purple font-semibold", children: " AI-Powered Products" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-primary-500 mb-10 max-w-xl", children: "I build scalable web applications and SaaS platforms — from robust backend APIs to polished user interfaces." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#contact",
                  className: "group px-8 py-4 rounded-full bg-accent-purple text-white font-semibold \n                       shadow-soft hover:shadow-glow transition-all duration-300 \n                       hover:scale-105 active:scale-95",
                  children: "Get In Touch"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#projects",
                  className: "px-8 py-4 rounded-full bg-white text-accent-purple font-semibold \n                       border-2 border-accent-purple shadow-soft\n                       hover:bg-accent-purple hover:text-white transition-all duration-300\n                       hover:scale-105 active:scale-95",
                  children: "View Projects"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 max-w-md animate-fade-in", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-gradient-to-r from-accent-purple/20 via-accent-pink/20 to-accent-blue/20 rounded-3xl blur-2xl opacity-60" }),
            /* @__PURE__ */ jsx("div", { className: "relative rounded-3xl overflow-hidden shadow-soft-lg border-4 border-white", children: /* @__PURE__ */ jsx("img", { src: banner, alt: "Shivam Sahni", className: "w-full h-full object-cover" }) })
          ] }) })
        ] })
      ]
    }
  );
}
const skillsAndTools = [
  {
    skillName: "Frontend Development",
    tools: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    note: "Proficient in building responsive, performant frontends with React and Next.js. Focused on clean UI, smooth UX, and scalable component architecture."
  },
  {
    skillName: "Backend Development",
    tools: ["Node.js", "Express.js", "REST APIs", "BullMQ", "Redis", "JWT"],
    note: "Experienced in designing resilient backend systems with Node.js — including async job queues, secure authentication, and high-throughput API design."
  },
  {
    skillName: "Databases",
    tools: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    note: "Hands-on experience with both relational and NoSQL databases — from schema design and complex aggregation pipelines to geospatial queries."
  },
  {
    skillName: "AI & Integrations",
    tools: ["AWS Bedrock", "Stripe", "Mapbox", "ChatGPT", "Claude", "Gemini"],
    note: "Integrated AI-driven content generation via AWS Bedrock and built production-grade integrations with Stripe payments and Mapbox location services."
  },
  {
    skillName: "Development Tools",
    tools: ["VSCode", "Cursor AI", "Git", "GitHub", "Linux/Unix", "Figma", "AWS", "Docker"],
    note: "Comfortable with modern development environments and version control systems, ensuring efficient and collaborative workflows."
  }
];
function Skills() {
  const allSkills = skillsAndTools.flatMap(
    (category) => category.tools.map((tool) => ({
      name: tool,
      category: category.skillName
    }))
  );
  return /* @__PURE__ */ jsx(
    SectionWrapper,
    {
      className: "section-padding relative overflow-hidden bg-white",
      id: "skills",
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-in-up", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-primary-900 mb-4", children: "Skills & Technologies" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-primary-600 max-w-2xl mx-auto", children: "Technologies and tools I work with to build modern applications" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mb-16", children: allSkills.map((skill, idx) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "group bg-primary-50 rounded-2xl p-6 text-center \n                       hover:bg-white hover:shadow-soft transition-all duration-300\n                       border border-transparent hover:border-accent-purple/20\n                       hover:scale-105 cursor-default animate-fade-in",
            style: { animationDelay: `${idx * 0.02}s` },
            children: /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base font-semibold text-primary-800 group-hover:text-accent-purple transition-colors", children: skill.name })
          },
          `${skill.name}-${idx}`
        )) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: skillsAndTools.map((category) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-gradient-soft rounded-2xl p-6 border border-primary-100 \n                       hover:shadow-soft transition-all duration-300",
            children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-primary-900 mb-3", children: category.skillName }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-primary-600 leading-relaxed", children: category.note })
            ]
          },
          category.skillName
        )) })
      ] })
    }
  );
}
const experinceData = [
  {
    title: "Software Engineer",
    company: "FDC Innovation Labs",
    location: "Hybrid",
    startDate: "May 2024",
    endDate: "Present"
  },
  {
    title: "Software Engineer Trainee",
    company: "iResonate",
    location: "On Premises",
    startDate: "Jan 2024",
    endDate: "May 2024"
  }
];
const educationData = [
  {
    course: "Bachelor of Computer Application",
    institute: "Shri Guru Ram Rai University (School of Engineering and Technology)",
    location: "Dehradun, Uttarakhand, India"
  },
  {
    course: "Sr. Secondary School",
    institute: "Shri Guru Ram Rai Raja Road",
    location: "Dehradun, Uttarakhand, India"
  },
  {
    course: "Secondary School",
    institute: "Shri Guru Ram Rai Sahastradhara Road",
    location: "Dehradun, Uttarakhand, India"
  }
];
function Experience() {
  return /* @__PURE__ */ jsx(SectionWrapper, { className: "section-padding relative bg-white", id: "experience", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 md:gap-16", children: [
    /* @__PURE__ */ jsx(EduExprCard, { data: experinceData, heading: "Experience" }),
    /* @__PURE__ */ jsx(EduExprCard, { data: educationData, heading: "Education" })
  ] }) }) });
}
const EduExprCard = ({ data, heading }) => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-primary-900 mb-8", children: heading }),
    /* @__PURE__ */ jsx("div", { className: "space-y-6", children: data.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex gap-5 group", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "mt-1 h-4 w-4 rounded-full bg-accent-purple shadow-glow" }),
        idx < data.length - 1 && /* @__PURE__ */ jsx("div", { className: "w-0.5 flex-1 bg-primary-200 mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pb-6 flex-1", children: [
        "course" in item ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold text-primary-900 mb-1", children: item.course }),
          /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-primary-600 mb-1", children: item.institute })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold text-primary-900 mb-1", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-primary-600 mb-1", children: item.company })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-primary-500", children: item.location }),
        item.startDate && /* @__PURE__ */ jsxs("p", { className: "text-sm text-primary-500 mt-1", children: [
          item.startDate,
          " - ",
          item.endDate
        ] })
      ] })
    ] }, idx)) })
  ] });
};
function Button({
  name,
  type = "button",
  isDisabled = false
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `${isDisabled ? "loader" : "my-3 p-3 px-10 rounded-md text-white font-semibold relative overflow-hidden bg-red-500 transition-all duration-500 ease-in-out before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-red-600 before:z-0 before:transition-all before:duration-500 hover:before:w-full z-10"}`,
      type,
      disabled: isDisabled,
      children: !isDisabled && /* @__PURE__ */ jsx("span", { className: "relative z-10", children: name })
    }
  );
}
async function makeRequestWithForm({
  endpoint,
  formData,
  method
}) {
  try {
    const response = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    const responseData = await response.json();
    if (!response.ok || (responseData == null ? void 0 : responseData.status) === "error" || (responseData == null ? void 0 : responseData.status) === "fail") {
      return {
        status: "error",
        message: responseData.message || `HTTP Error ${response.status}`
      };
    }
    return responseData;
  } catch (error) {
    return {
      status: "error",
      message: "Something went wrong"
    };
  }
}
const formFields = [
  {
    fieldType: "input",
    type: "text",
    placeholder: "Enter your Name",
    required: true,
    label: "Name",
    name: "name"
  },
  {
    fieldType: "input",
    type: "email",
    placeholder: "Enter your email",
    required: true,
    label: "Email",
    name: "email"
  },
  {
    fieldType: "textarea",
    type: "textarea",
    placeholder: "Type your message",
    required: false,
    label: "Message",
    name: "message"
  }
];
const socials = [
  {
    name: "shivamsahni507@gmail.com",
    link: "",
    icon: faEnvelope
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shivam-sahni-132354227/",
    icon: faLinkedin
  },
  {
    name: "GitHub",
    link: "https://github.com/1Shivam4",
    icon: faGithub
  }
];
async function SendMail(formData) {
  return makeRequestWithForm({
    endpoint: "undefined/send-mail",
    formData,
    method: "POST"
  });
}
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const onSubmit = async (data) => {
    setIsFormSubmitting(true);
    const emailResponse = await SendMail(data);
    if (emailResponse.status === "error") {
      setIsFormSubmitting(false);
      return toast.error(
        "Error occured sending mail. Please try again after sometime!!!"
      );
    }
    if (emailResponse.success) {
      setIsFormSubmitting(false);
      reset();
      return toast.success(
        "Thank you for your response! I'll connect with you soon."
      );
    }
  };
  return /* @__PURE__ */ jsxs(SectionWrapper, { className: "bg-slate-100", id: "contact", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-slate-600 text-center", children: "Contact" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-4 md:mx-24 flex flex-col md:flex-row justify-between gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "py-3 md:w-1/3 flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-slate-600 mb-2", children: "Social Links" }),
        socials.map(
          (soci) => soci.link ? /* @__PURE__ */ jsxs(
            "a",
            {
              href: soci.link,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-slate-600 hover:underline hover:text-blue-800 transition duration-200",
              children: [
                /* @__PURE__ */ jsx(
                  FontAwesomeIcon,
                  {
                    icon: soci.icon,
                    className: "text-slate-600 mr-2"
                  }
                ),
                soci.name
              ]
            },
            soci.name
          ) : /* @__PURE__ */ jsxs(
            "span",
            {
              className: "text-slate-600 flex items-center",
              children: [
                /* @__PURE__ */ jsx(
                  FontAwesomeIcon,
                  {
                    icon: soci.icon,
                    className: "text-slate-600 mr-2"
                  }
                ),
                soci.name
              ]
            },
            soci.name
          )
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:w-2/3 border-l-2 border-red-500 pl-4", children: /* @__PURE__ */ jsxs(
        "form",
        {
          className: "flex flex-col gap-6",
          onSubmit: handleSubmit(onSubmit),
          children: [
            formFields.map((field, idx) => {
              var _a;
              return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: field.name,
                    className: "text-sm font-medium text-slate-700",
                    children: field.label
                  }
                ),
                field.fieldType === "input" ? /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: field.name,
                    placeholder: field.placeholder,
                    className: "border border-slate-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400",
                    ...register(field.name, {
                      required: field.required ? `${field.label} is required.` : false
                    })
                  }
                ) : /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    id: field.name,
                    placeholder: field.placeholder,
                    className: "border border-slate-300 rounded-md px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-red-400",
                    ...register(field.name, {
                      required: field.required ? `${field.label} is required.` : false
                    })
                  }
                ),
                errors[field.name] && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm", children: (_a = errors[field.name]) == null ? void 0 : _a.message })
              ] }, idx);
            }),
            /* @__PURE__ */ jsx(Button, { name: "Submit", type: "submit", isDisabled: isFormSubmitting })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(Toaster, { richColors: true })
  ] });
}
const ProjectIntroProps = [
  {
    heading: "AI-Powered Diabetes Prediction",
    intro: "Developed a full-stack project using MERN and machine learning for my college. It predicts diabetes based on multiple input fields, with a user-friendly frontend and a robust backend.",
    imgSrc: "/assets/diabetes.JPG",
    color: "pastel-blue"
  },
  {
    heading: "FDC Innovation Labs",
    intro: "I developed the entire FDC Innovation Labs website myself, including the frontend, backend APIs, and admin panel, managing all aspects of the project end-to-end.",
    imgSrc: "/assets/fdc.png",
    color: "pastel-green"
  },
  {
    heading: "CB Freelancers",
    intro: "Developed a full-stack freelance services platform for a startup, including user-facing frontend, backend APIs, and a robust admin panel.",
    imgSrc: "/assets/cbFreelance.png",
    color: "pastel-lavender"
  }
];
function Projects() {
  const [heroProject, ...otherProjects] = ProjectIntroProps;
  return /* @__PURE__ */ jsx(SectionWrapper, { className: "section-padding relative bg-gradient-soft", id: "projects", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-in-up", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-primary-900 mb-4", children: "Featured Projects" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-primary-600 max-w-2xl mx-auto", children: "A selection of projects I've built from concept to deployment" })
    ] }),
    heroProject && /* @__PURE__ */ jsx(Link, { to: `/${heroProject.heading}`, className: "block mb-12 group", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: `bg-${heroProject.color} rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg 
                       transition-all duration-500 hover:scale-[1.02]`,
        children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "order-2 md:order-1 p-8 md:p-12", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-bold text-primary-900 mb-4 \r\n                               group-hover:text-accent-purple transition-colors", children: heroProject.heading }),
            /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-primary-700 leading-relaxed mb-6", children: heroProject.intro }),
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center text-accent-purple font-semibold gap-2 \r\n                                group-hover:gap-4 transition-all", children: [
              "View Project",
              /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 8l4 4m0 0l-4 4m4-4H3" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "order-1 md:order-2 h-64 md:h-96", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: heroProject.imgSrc,
              alt: heroProject.heading,
              className: "w-full h-full object-cover"
            }
          ) })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: otherProjects.map((project) => /* @__PURE__ */ jsx(
      Link,
      {
        to: `/${project.heading}`,
        className: "group block",
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: `bg-${project.color} rounded-3xl overflow-hidden shadow-soft 
                         hover:shadow-soft-lg transition-all duration-500 
                         hover:scale-105 h-full flex flex-col`,
            children: [
              /* @__PURE__ */ jsx("div", { className: "h-56 overflow-hidden", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: project.imgSrc,
                  alt: project.heading,
                  className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-8 flex-1 flex flex-col", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold text-primary-900 mb-3 \r\n                               group-hover:text-accent-purple transition-colors", children: project.heading }),
                /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-primary-700 leading-relaxed mb-4 flex-1", children: project.intro }),
                /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center text-accent-purple font-semibold gap-2 \r\n                                group-hover:gap-4 transition-all", children: [
                  "View Project",
                  /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 8l4 4m0 0l-4 4m4-4H3" }) })
                ] })
              ] })
            ]
          }
        )
      },
      project.heading
    )) })
  ] }) });
}
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shivam Sahni",
  url: "https://1shivam4.github.io/Portfolio/",
  image: "https://1shivam4.github.io/Portfolio/assets/profile.jpg",
  jobTitle: "Full Stack Engineer",
  worksFor: {
    "@type": "Organization",
    name: "FDC Innovation Labs"
  },
  sameAs: [
    "https://www.linkedin.com/in/shivam-sahni-132354227/",
    "https://github.com/1Shivam4",
    "https://x.com/ShivamS89244907"
  ],
  knowsAbout: [
    "Full Stack Development",
    "React.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "AWS Bedrock",
    "BullMQ",
    "SaaS"
  ]
};
function Landing() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Shivam Sahni — Full Stack Engineer" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Full Stack Engineer specializing in scalable SaaS platforms, backend systems, and AI-powered products. View my projects and experience."
        }
      ),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(personSchema) })
    ] }),
    /* @__PURE__ */ jsx(Intro, {}),
    /* @__PURE__ */ jsx(Skills, {}),
    /* @__PURE__ */ jsx(Experience, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Contact, {})
  ] });
}
const ProjectDescProps = [
  {
    heading: "CB Freelancers",
    img: "/assets/cbFreelance.png",
    desc: "Developed a full-stack freelance services platform for a startup, including user-facing frontend, backend APIs, and a robust admin panel. The system supports dynamic service listings, user management, and secure authentication. Built with scalable architecture and modern tools to ensure maintainability and performance.",
    projectLink: "https://cbfreelancers.com/",
    techStack: ["TypeScript", "React", "Tailwind CSS", "Node.js", "Mongo Db"]
  }
];
function ProjectDetails() {
  const projectParams = useParams();
  const [prjDetails, setPrjDetails] = useState(null);
  useEffect(() => {
    const project = ProjectDescProps.find((prj) => prj.heading === projectParams.projectName);
    setPrjDetails(project || null);
  }, [projectParams]);
  return /* @__PURE__ */ jsx(Fragment, { children: prjDetails ? /* @__PURE__ */ jsxs(SectionWrapper, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        prjDetails.heading,
        " — Shivam Sahni"
      ] }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: `${prjDetails.heading} — a project by Shivam Sahni. Tech stack: ${prjDetails.techStack.join(", ")}.`
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(FlexCol, { className: "mx-4 md:mx-24 flex-wrap items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ jsx("img", { src: prjDetails.img, className: "p-2 w-full md:w-1/2 object-contain" }) }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-2xl font-bold text-slate-700", children: prjDetails.heading }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 md:w-1/2 text-center  text-slate-600", children: prjDetails.desc }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx("strong", { children: "Tech Stack:" }),
        " ",
        prjDetails.techStack.join(", ")
      ] }),
      /* @__PURE__ */ jsx("a", { href: prjDetails.projectLink, target: "blank", className: "my-5 text-red-500 underline font-bold ", children: "Project Link" })
    ] })
  ] }) : /* @__PURE__ */ jsx(Error, { message: "Project Not Found" }) });
}
const Error = ({ message }) => {
  return /* @__PURE__ */ jsx("div", { className: "p-0 h-[80vh] flex justify-center", children: /* @__PURE__ */ jsxs(FlexCol, { className: "justify-center items-center", children: [
    /* @__PURE__ */ jsx("img", { src: "/assets/404.jpeg", className: "h-64" }),
    /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-600 text-xl", children: message })
  ] }) });
};
function AppRoutes() {
  return /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsx(MainNavigation, { children: /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Landing, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/:projectName", element: /* @__PURE__ */ jsx(ProjectDetails, {}) })
  ] }) }) });
}
function App() {
  return /* @__PURE__ */ jsx(AppRoutes, {});
}
const createApp = ViteReactSSG(
  /* @__PURE__ */ jsx(HelmetProvider, { children: /* @__PURE__ */ jsx(App, {}) })
);
export {
  createApp
};
