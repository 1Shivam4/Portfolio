import React from "react";
import { SectionWrapper } from "../styles/GlobalStyles";
import { Button } from "./Button";

interface FormProps {
  fieldType: "input" | "textarea";
  type: string;
  placeholder: string;
  required: boolean;
  label: string;
}

interface SocialLinks {
  name: string;
  link: string;
  img: string;
}

const formFields: FormProps[] = [
  {
    fieldType: "input",
    type: "text",
    placeholder: "Enter your Name",
    required: true,
    label: "Name",
  },
  {
    fieldType: "input",
    type: "email",
    placeholder: "Enter your email",
    required: true,
    label: "Email",
  },
  {
    fieldType: "textarea",
    type: "textarea",
    placeholder: "Type your message",
    required: false,
    label: "Message",
  },
];

const socials: SocialLinks[] = [
  {
    name: "Gmail",
    link: "mailto:shivamsahni507@gmail.com",
    img: "", // Add image URLs if needed
  },
  {
    name: "Github",
    link: "",
    img: "",
  },
  {
    name: "Discord",
    link: "",
    img: "",
  },
  {
    name: "X",
    link: "",
    img: "",
  },
];

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <SectionWrapper className="bg-slate-50">
      <h2 className="my-5 text-4xl font-bold text-slate-600 text-center">
        Contact
      </h2>

      <div className="mx-4 md:mx-24 flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-1/3 flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-slate-600 mb-2">
            Social Links
          </h3>
          {socials.map((soci) => (
            <a
              key={soci.name}
              href={soci.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline hover:text-blue-800 transition duration-200"
            >
              {soci.name}
            </a>
          ))}
        </div>

        {/* Form */}
        <div className="md:w-2/3 border-l-2 border-red-500 pl-4">
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => handleSubmit(e)}
          >
            {formFields.map((field, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">
                  {field.label}
                </label>
                {field.fieldType === "input" ? (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="border border-slate-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                ) : (
                  <textarea
                    placeholder={field.placeholder}
                    className="border border-slate-300 rounded-md px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                )}
              </div>
            ))}
            <Button name="Submit" type="submit" />
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
