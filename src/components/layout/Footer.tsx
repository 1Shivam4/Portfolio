import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FlexDiv } from "../styles/GlobalStyles";
import { faFacebook, faInstagram, faTwitter, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconMap: Record<string, IconProp> = {
  faFacebook,
  faTwitter,
  faDiscord,
  faLinkedin,
  faInstagram,
};

const social = [
  {
    link: "https://www.facebook.com/shivam.sahni.739326",
    icon: "faFacebook",
  },
  {
    link: "https://www.instagram.com/_sahnishivam/",
    icon: "faInstagram",
  },
  {
    link: "https://x.com/ShivamS89244907",
    icon: "faTwitter",
  },
  {
    link: "https://www.linkedin.com/in/shivam-sahni-132354227/",
    icon: "faLinkedin",
  },
];

function Footer() {
  return (
    <FlexDiv className="mx-4 md:mx-24 py-5 bg-white border-1">
      <ul className="flex gap-4">
        {social.map((soci, i) => (
          <li key={i}>
            <a href={soci.link}>
              <FontAwesomeIcon icon={iconMap[soci.icon]} className="text-slate-700 hover:text-red-600" />
            </a>
          </li>
        ))}
      </ul>
      <p>Copyright &copy; 2024</p>
    </FlexDiv>
  );
}

export default Footer;
