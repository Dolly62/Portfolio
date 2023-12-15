import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from "react-icons/fa";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import react from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import illustrator from "../assets/illustrator.png";
import photoshop from "../assets/photoshop.png";
import ExpenseTracker from "../assets/expense.png";
import MailBoxClient from "../assets/mailbox.png";
import LandingPage from "../assets/Landingpage.png";
import ResponsiveWebpage from "../assets/Responsive.png";

import Theme1 from "../assets/purple.png";
import Theme2 from "../assets/red.png";
import Theme3 from "../assets/blueviolet.png";
import Theme4 from "../assets/blue.png";
import Theme5 from "../assets/goldenrod.png";
import Theme6 from "../assets/magenta.png";
import Theme7 from "../assets/yellowgreen.png";
import Theme8 from "../assets/orange.png";
import Theme9 from "../assets/green.png";
import Theme10 from "../assets/yellow.png";

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
    icons: html,
  },

  {
    id: 2,
    title: "CSS3",
    icons: css,
  },

  {
    id: 3,
    title: "Javascript",
    icons: javascript,
  },

  {
    id: 4,
    title: "React",
    icons: react,
  },

  {
    id: 5,
    title: "Bootstrap",
    icons: bootstrap,
  },

  {
    id: 6,
    title: "GitHub",
    icons: github,
  },
  {
    id: 7,
    title: "Illustrator",
    icons: illustrator,
  },
  {
    id: 8,
    title: "Photoshop",
    icons: photoshop,
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];

export const portfolio = [
  {
    id: 1,
    title: "Expense Tracker",
    url: "https://x-expense43.web.app/signin",
    gitHub: "https://github.com/Dolly62/X-expense-tracker.git",
    img: ExpenseTracker,
    technologies: ["ReactJS", "Redux", "Firebase", "BootStrap"],
  },
  {
    id: 2,
    title: "MailBox Client",
    url: "https://mailbox-client-477fb.web.app/login",
    gitHub: "https://github.com/Dolly62/MailBox.git",
    img: MailBoxClient,
    technologies: ["ReactJS", "Redux", "Firebase", "CSS"],
  },
  {
    id: 3,
    title: "Landing Page",
    url: "https://landing-page-4e2ee3.netlify.app/",
    gitHub: "",
    img: LandingPage,
    technologies: ["HTML", "BootStrap"],
  },
  {
    id: 4,
    title: "Responsive Webpage",
    url: "https://single-page-application-958281.netlify.app/",
    gitHub: "https://github.com/Dolly62/Responsive-website.git",
    img: ResponsiveWebpage,
    technologies: ["React", "Tailwind"],
  },
];
