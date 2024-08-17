import project1 from "../assets/ecommerce.jpg";
import project2 from "../assets/network.png";
import project3 from "../assets/app.png";

export const Data = [
  {
    id: "001",
    name: "E-Commerce Platform",
    img: project1,
    info: "Developed a full-fledged e-commerce platform that supports multiple vendors, secure payment gateways, and real-time inventory management. The platform was built using React.js for the front end and Node.js with Express for the back end, along with MongoDB for database management.",
    techs: ["Node.js", "React.js", "Express", "MongoDB", "Stripe "],

    color: ["bg-node", "bg-react", "bg-express", "bg-mongodb", "bg-stripe"],
  },
  {
    id: "002",
    name: "Social Networking Site",
    img: project2,
    info: "Created a social networking site that allows users to create profiles, connect with friends, share posts, and engage in real-time chats. Implemented robust security features, including authentication and authorization. The site also includes an intuitive UI/UX design for better user interaction.",
    techs: ["Angular", "Django", "PostgreSQL", "WebSocket", "AWS"],
    color: [
      "bg-express",
      "bg-express",
      "bg-express",
      "bg-express",
      "bg-express",
    ],
  },
  {
    id: "003",
    name: "Task Management App",
    img: project3,
    info: "Built a task management application that helps users organize their daily activities, set reminders, and track progress. The app includes features such as task prioritization, deadline notifications, and data synchronization across devices.",
    techs: ["Vue.js", "Firebase", "Node.js", "SQLite"],
    color: ["bg-mongodb", "bg-firebase", "bg-node", "bg-next"],
  },
];
