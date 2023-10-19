import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fornt End Developer",
    icon: creator,
  },
  {
    title: "Web App Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Android",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Android",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "firebase",
    icon: figma,
  },
  {
    name: "mysql",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate Lead",
    company_name: "Google Developer Club DPCOE",
    icon: shopify,
    iconBg: "#383E56",
    date: "September 2023- Present",
    points: [
      "Milestone Software(Security Software).",
      "Managing back-end database data using Microsoft SQL Server.",
      "CCTV Camera Software Configuration.",
      "OS Migration on Server",
      "CCTV Camera & Access Control Device Configuration.",
    ],
  },
  {
    title: "Jr. Software Engineer",
    company_name: "Smarttech Secure Solution PVT. LTD.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2021 - September 2021",
    points: [
      "Milestone Software(Security Software).",
      "Managing back-end database data using Microsoft SQL Server.",
      "CCTV Camera Software Configuration.",
      "OS Migration on Server",
      "CCTV Camera & Access Control Device Configuration.",
    ],
  },
  {
    title: "Software Engineering Virtual Experience",
    company_name: "The Forage - JPMORGAN CHASE & CO.",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Interface with a stock price data feed.",
      "Use JPMC frameworks and tools.",
      "Display data visually for traders.",
      
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Sell",
    description:
      "Desktop-based Application that allows users to search, book, and manage car buying from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "Swing Java",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Kiran-Jadhav200/Carsell",
  },
  {
    name: "Simple SOS APP",
    description:
      "The Human Safety app is developed in Android Studio. It is an application where the user shakes his device more than 5 times then it will send a Current location in SMS.",
    tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      
    ],
    image: jobit,
    source_code_link: "https://github.com/Kiran-Jadhav200/Human-Safety-Android-app",
  },
 
];

export { services, technologies, experiences, testimonials, projects };