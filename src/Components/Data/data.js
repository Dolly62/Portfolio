import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import react from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/home",
    exact: true,
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
    exact: true,
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
    exact: true,
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
    exact: true,
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Dolly",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Kamboj",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Faridabad",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "9354429649",
  },

  {
    id: 8,
    title: "Email : ",
    description: "kambojdolly107919@gmail.com",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "English, Hindi",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html5",
    icons: html ,
  },

  {
    id: 2,
    title: "CSS3",
    icons: css ,
  },

  {
    id: 3,
    title: "Javascript",
    icons:  javascript ,
  },

  {
    id: 4,
    title: "React",
    icons:  react ,
  },

  {
    id: 5,
    title: "Bootstrap",
    icons:  bootstrap ,
  },

  {
    id: 6,
    title: "GitHub",
    icons:  github ,
  },
];
