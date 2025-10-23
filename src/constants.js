// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.svg';
import cssLogo from './assets/tech_logo/css.svg';
import javascriptLogo from './assets/tech_logo/javascript.svg';
import reactjsLogo from './assets/tech_logo/reactjs.svg';
import reduxLogo from './assets/tech_logo/redux.svg';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.svg';
import bootstrapLogo from './assets/tech_logo/bootstrap.svg';
import nodejsLogo from './assets/tech_logo/nodejs.svg';
import expressjsLogo from './assets/tech_logo/express.svg';
import mysqlLogo from './assets/tech_logo/mysql.svg';
import mongodbLogo from './assets/tech_logo/mongodb.svg';
import cLogo from './assets/tech_logo/c.svg';
import cppLogo from './assets/tech_logo/cpp.svg';
import javaLogo from './assets/tech_logo/java.svg';
import pythonLogo from './assets/tech_logo/python.svg';
import gitLogo from './assets/tech_logo/git.svg';
import githubLogo from './assets/tech_logo/github.svg';
import vscodeLogo from './assets/tech_logo/vscode.svg';
import postmanLogo from './assets/tech_logo/postman.svg';
import mcLogo from './assets/tech_logo/mc.svg';
import figmaLogo from './assets/tech_logo/figma.svg';
import netlifyLogo from './assets/tech_logo/netlify.svg';
import vercelLogo from './assets/tech_logo/vercel.svg';
import sqlLogo from './assets/tech_logo/sql.svg'
import viteLogo from './assets/tech_logo/vite.svg'
import jwtLogo from './assets/tech_logo/jwt.svg'
import flaskLogo from './assets/tech_logo/Flask.svg'

// Experience Section Logo's
import oasisInfobyteLogo from './assets/company_logo/oasisInfobyte.png';
import hashedBitLogo from './assets/company_logo/HashedBit.png';

// Education Section Logo's
import coerLogo from './assets/education_logo/coer.png'
import sheffieldLogo from './assets/education_logo/sheffield.png'

// Project Section Logo's
import newsmaniaLogo from './assets/work_logo/newsmania.png'
import chessGameLogo from './assets/work_logo/chess.png'
import pasteAppLogo from './assets/work_logo/paste-app.png'
import weatherAppLogo from './assets/work_logo/weather-app.png'
import leetmetricLogo from './assets/work_logo/leetmetric.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'JWT', logo: jwtLogo },
      { name: 'Flask', logo: flaskLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'SQL', logo: sqlLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Vite', logo: viteLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: hashedBitLogo,
      role: "Software Developer Intern",
      company: "HashedBit Innovations",
      date: "November 2024 - January 2025",
      desc: "Developed and implemented key frontend and backend features for an e-commerce platform. Collaborated with the tech lead in daily stand-ups to provide updates, address challenges and discuss progress.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "React JS",
        "Node JS",
        "Express JS",
        "MongoDB",
        "RESTful APIs"
      ]
    },
    {
      id: 1,
      img: oasisInfobyteLogo,
      role: "Web Developer Intern",
      company: "Oasis Infobyte",
      date: "September 2023 - November 2023",
      desc: "Gained hands-on experience in making projects using frontend technologies like HTML, CSS, JavaScript, and Bootstrap. Worked on developing responsive web pages and enhancing user interfaces under the guidance of senior developers.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap"
      ]
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: coerLogo,
      school: "College of Engineering Roorkee",
      date: "Sept 2021 - July 2025",
      grade: "7.60 CGPA",
      desc: "I have completed my Bachelor's degree (B.Tech) in CSE from COER, Uttarakhand. During my time at COER, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering.",
      degree: "BTech (CSE)",
    },
    {
      id: 1,
      img: sheffieldLogo,
      school: "Sheffield School",
      date: "April 2020 - July 2021",
      grade: "76.4%",
      desc: "I completed my class 12 education from Sheffield School, Roorkee, Uttarakhand under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM)",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      img: sheffieldLogo,
      school: "Sheffield School",
      date: "Apr 2018 - May 2019",
      grade: "89.6%",
      desc: "I completed my class 10 education from Sheffield School, Roorkee, Uttarakhand under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Newsmania",
      description:
        "Real time news fetching from multiple sources (RSS Feeds). Implemented AI-powered news summarization. Achieved 45% less time in summarization than other platforms. Featured with notes section which persist in localStorage and automatic refresh of news feed.",
      image: newsmaniaLogo,
      tags: ["MERN", "Tailwind CSS", "Python flask", "mT5 Model"],
      github: "https://github.com/Spark-11/newsmania",
      webapp: "https://drive.google.com/file/d/1H-Q7enEEh05HKxWuLDR8i2YrRUrfVT7_/view",
    },
    {
      id: 1,
      title: "Chess Game",
      description:
        "A real-time multiplayer chess game built with Node.js, Express.js, and Socket.io. It features an interactive chessboard using EJS templating and incorporates the Chess.js library for accurate game logic and rules enforcement. Players can compete against each other in real-time, making moves that are instantly reflected on both players' screens.",
      image: chessGameLogo,
      tags: ["Node.js", "Express.js", "Socket.io", "EJS", "Chess.js"],
      github: "https://github.com/Spark-11/chessGame",
      webapp: "https://chessgame-2a6o.onrender.com/",
    },
    {
      id: 2,
      title: "Paste App",
      description:
        "Frontend developed using React.js for a seamless user interface. Implemented features like copy, view, delete, edit and search the notes for easy access. Integrated local storage to store the notes created by the users.  ",
      image: pasteAppLogo,
      tags: ["React JS", "Redux", "Tailwind CSS"],
      github: "https://github.com/Spark-11/Paste_App",
      webapp: "https://paste-app-theta.vercel.app/",
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "A weather application that provides real-time weather information for any location. Built using HTML, CSS, and JavaScript, it fetches data from a weather API to display current conditions, forecasts, and other relevant weather details in a user-friendly interface.",
      image: weatherAppLogo,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/Spark-11/Weather_App",
      webapp: "https://weath-1er-app.netlify.app/",
    },
    {
      id: 4,
      title: "LeetMetric",
      description:
        "LeetMetric is a web application that tracks and analyzes coding practice on LeetCode. It provides users with progress tracking.",
      image: leetmetricLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Spark-11/Leetmetric",
      webapp: "https://leetmetric-1.netlify.app/",
    },
  ];  