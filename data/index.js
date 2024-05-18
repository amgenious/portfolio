import { angular, backend, bismuth, bootstrap, chare, css, ecg, ecommerce, ecommerce1, ecommerce2, figma, firebase, flutter, git, graphic, html, javascript, mobile, mongodb, nextjs, nodejs, nubsuenr, passenger, reactjs, solartaxi, tailwind, techathon, threejs, todo, typescript, urc, urc_learning_hub, web } from "@/assets";

const navigationlinks = [
    {
        id:'1',
        name:'About',
        url:'/#about'
    },
    {
        id:'5',
        name:'Experience',
        url:'/#experience'
    },
    {
        id:'11',
        name:'Projects',
        url:'/#projects'
    },
    {
        id:'12',
        name:'Contact',
        url:'/#contact'
    },
];
const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer (Flutter)",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Graphic Designer",
      icon: graphic,
    },
  ];

  const experiences = [
    {
      title: "Software Developer ",
      company_name: "Solar Taxi",
      icon: solartaxi,
      iconBg: "#ffff",
      date: "October 2023 - Present",
      points: [
        "Responsible for developing and maintaining company's web applications and mobile apps using Angular.js and Flutter.",
        "Works in conjunction with diverse teams, encompassing designers, product managers, and backend developers, to collect specifications and guarantee the successful launch of their application.",
        "Executes UI/UX designs in order to craft aesthetically pleasing and intuitive user interfaces.",
        "Engages in code evaluations and offering valuable input to fellow developers during the review process.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Bismuth",
      icon: bismuth,
      iconBg: "#ffff",
      date: "September 2022 - January 2023",
      points: [
        "Developed and maintained web applications using React.js and other related technologies.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implemented responsive design and ensured cross-browser compatibility using chrome dev tools.",
        "Participated in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend Developer (Remote)",
      company_name: "Techathon",
      icon: techathon,
      iconBg: "#E6DEDD",
      date: "October 2022 - December 2022",
      points: [
        "Developed and maintained web applications using Next.ts, Chakra UI and other related technologies.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implemented responsive design and ensured cross-browser compatibility using chrome dev tools.",
      ],
    },
    {
      title: "IT Support Engineer (Intern)",
      company_name: "Electricity Company of Ghana (ECG)",
      icon: ecg,
      iconBg: "#E6DEDD",
      date: "October 2021 - November 2021",
      points: [
        "Reduced rerouting of network hubs to computer, optimized software applications and operating systems to increase computer throughput for increased productivity",
        "Troubleshooted networking devices to ensure its optimum efficient use.",
        "Installed and Updated their system security softwares for their offices and warehouses.",
      ],
    },
  ];
  
  const technologies = [
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
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
      name: "figma",
      icon: figma,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Next",
      icon: nextjs,
    },

  ];

  const projects = [
    {
      name: "Todo App",
      web_link:"https://drive.google.com/file/d/1WmTL3JtjQVwTnnxhYP01ojEzViNQbqnm/view?usp=sharing",
      category:"app",
      description:
        "This is todo app that allows you to add task, check them when complete and delete them when done with the task",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "hive",
          color: "green-text-gradient",
        },
        {
          name: "mobile-app",
          color: "orange-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/",
    },
    {
      name: "Ecommerce App",
      web_link:"https://drive.google.com/file/d/1wcmWYnPvkyVX63aJlI9m6dQNjByyWvr5/view?usp=sharing",
      category:"app",
      description:
        "This is a prototype of an ecommerce website. it was inspired by nike designs",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "provider",
          color: "green-text-gradient",
        },
        {
          name: "mobile-app",
          color: "orange-text-gradient",
        },
      ],
      image: ecommerce2,
      source_code_link: "https://github.com/",
    },
    {
      name: "Solar Taxi Passenger App*",
      web_link:"",
      category:"app",
      description:
        "This is an android and ios app built using flutter for passengers to book their seats on their buses and also pay their fares through the app. This app is currently in development",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "mobile-app",
          color: "orange-text-gradient",
        },
      ],
      image: passenger,
      source_code_link: "https://github.com/",
    },
    {
      name: "Ecommerce App 1*",
      web_link:"",
      category:"app",
      description:
        "This is a prototype of an ecommerce app built using flutter",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mobile-app",
          color: "orange-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/",
    },
    {
      name: "Ecommerce App 2*",
      web_link:"",
      category:"app",
      description:
        "This is a prototype of an ecommerce app built using flutter with light and darkmode feature",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mobile-app",
          color: "orange-text-gradient",
        },
      ],
      image: ecommerce1,
      source_code_link: "https://github.com/",
    },
    {
      name: "Nubs Uenr",
      category:"web",
      web_link:"https://nubsuenr.vercel.app",
      description:
        "Web application that enables users to know more about nubs uenr, it vision and missions. Users can get access to books on their e-library platform. Users can get access to previous biblestudies materials and sermons preached on Sundays",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "orange-text-gradient",
        },
        {
          name: "website",
          color: "pink-text-gradient",
        },
      ],
      image: nubsuenr,
      source_code_link: "https://github.com/",
    },
    {
      name: "Chare",
      web_link:"https://charehome.vercel.app",
      category:"webapp",
      description:" This is website that allows users to store data on the web for them. It also available for all platforms",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "website",
          color: "pink-text-gradient",
        },
      ],
      image: chare,
      source_code_link: "https://github.com/",
    },
    {
      name: "Uenr Robotics Club (urc)",
      web_link:"https://urc-eight.vercel.app",
      category:"web",
      description:
        "Web application that allows users to know more about urc; its members, executives and patron. Users can get access to completed projects on the projects page",
      tags: [
        {
          name: "next js",
          color: "blue-text-gradient",
        },
        {
          name: "website",
          color: "pink-text-gradient",
        },
      ],
      image: urc,
      source_code_link: "https://github.com/",
    },
    {
      name: "URC Learning Hub",
      web_link:"https://urc-codes.github.io/learning_hub_frontend/",
      category:"webapp",
      description:
        "A web application where users can get access to free books and videos on some skills such as graphic designing, web development, mobile development, ai and machine learning and general programming",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
        {
          name:"nodejs",
          color:"orange-text-gradient"
        },
        {
          name: "website",
          color: "pink-text-gradient",
        },
      ],
      image: urc_learning_hub,
      source_code_link: "https://github.com/",
    },
  ];

export {navigationlinks, services, experiences, technologies, projects}