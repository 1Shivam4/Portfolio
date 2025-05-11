import { useForm } from "react-hook-form";
import { SectionWrapper } from "../styles/GlobalStyles";
import { Button } from "./Button";
import { makeRequestWithForm } from "../../lib/Document.services";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface FormProps {
  fieldType: "input" | "textarea";
  type: string;
  placeholder: string;
  required: boolean;
  label: string;
  name: string;
}

const formFields: FormProps[] = [
  {
    fieldType: "input",
    type: "text",
    placeholder: "Enter your Name",
    required: true,
    label: "Name",
    name: "name",
  },
  {
    fieldType: "input",
    type: "email",
    placeholder: "Enter your email",
    required: true,
    label: "Email",
    name: "email",
  },
  {
    fieldType: "textarea",
    type: "textarea",
    placeholder: "Type your message",
    required: false,
    label: "Message",
    name: "message",
  },
];

const socials = [
  {
    name: "shivamsahni507@gmail.com",
    link: "",
    icon: faEnvelope,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shivam-sahni-132354227/",
    icon: faLinkedin,
  },
  {
    name: "GitHub",
    link: "https://github.com/1Shivam4",
    icon: faGithub,
  },
];

async function SendMail(formData: Object) {
  return makeRequestWithForm({
    endpoint: import.meta.env.VITE_BACKEND_URL + "/send-mail",
    formData,
    method: "POST",
  });
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const onSubmit = async (data: Object) => {
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
  return (
    <SectionWrapper className="bg-slate-100" id="contact">
      <h2 className="text-4xl font-bold text-slate-600 text-center">Contact</h2>

      <div className="mx-4 md:mx-24 flex flex-col md:flex-row justify-between gap-10">
        <div className="py-3 md:w-1/3 flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-slate-600 mb-2">
            Social Links
          </h3>
          {socials.map((soci) =>
            soci.link ? (
              <a
                key={soci.name}
                href={soci.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:underline hover:text-blue-800 transition duration-200"
              >
                <FontAwesomeIcon
                  icon={soci.icon}
                  className="text-slate-600 mr-2"
                />
                {soci.name}
              </a>
            ) : (
              <span
                key={soci.name}
                className="text-slate-600 flex items-center"
              >
                <FontAwesomeIcon
                  icon={soci.icon}
                  className="text-slate-600 mr-2"
                />
                {soci.name}
              </span>
            )
          )}
        </div>

        {/* Form */}
        <div className="md:w-2/3 border-l-2 border-red-500 pl-4">
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            {formFields.map((field, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <label
                  htmlFor={field.name}
                  className="text-sm font-medium text-slate-700"
                >
                  {field.label}
                </label>

                {field.fieldType === "input" ? (
                  <input
                    id={field.name}
                    placeholder={field.placeholder}
                    className="border border-slate-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                    {...register(field.name, {
                      required: field.required
                        ? `${field.label} is required.`
                        : false,
                    })}
                  />
                ) : (
                  <textarea
                    id={field.name}
                    placeholder={field.placeholder}
                    className="border border-slate-300 rounded-md px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
                    {...register(field.name, {
                      required: field.required
                        ? `${field.label} is required.`
                        : false,
                    })}
                  />
                )}

                {errors[field.name] && (
                  <p className="text-red-500 text-sm">
                    {errors[field.name]?.message as string}
                  </p>
                )}
              </div>
            ))}

            <Button name="Submit" type="submit" isDisabled={isFormSubmitting} />
          </form>
        </div>
      </div>
      <Toaster richColors />
    </SectionWrapper>
  );
}
