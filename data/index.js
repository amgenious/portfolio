import { angular, Aora, backend, bismuth, bootstrap, Business, chare, css, ecg, ecommerce, ecommerce1, ecommerce2, figma, firebase, flutter, git, graphic, html, javascript, mobile, mongodb, mydesign, nextjs, nodejs, nubsuenr, passenger, reactjs, solartaxi, tailwind, techathon, threedshirt, threejs, todo, typescript, Uberclone, urc, urc_learning_hub, voteadmin, voteuser, web } from "@/assets";

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
      title: "Mobile App Developer (Flutter & React Native)",
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
      company_name: "SolarTaxi Company Limited",
      icon: solartaxi,
      iconBg: "#ffff",
      date: "October 2023 - September 2024",
      points: [
        "Spearheaded the development and maintenance of  SolarTaxi’s Fleet Management App, Bus Transit App and Ride Hailing App, utilizing Angular, Flutter, and React Native, leading to an  increase in user engagement.",
        "Collaborated cross-functionally with designers, product managers, and backend developers, driving successful application launches that improved operational efficiency.",
        "Transformed UI/UX designs into visually appealing and user-friendly interfaces, contributing to an improvement in user satisfaction ratings.",
        "Improved the development process through rigorous code reviews, resulting in reduction in post-launch bugs.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Bismuth",
      icon: bismuth,
      iconBg: "#ffff",
      date: "September 2022 - January 2023",
      points: [
        "Engineered and sustained high-performing web application named Dujj using React, contributing to an increase in application performance and user 	experience.",
        "Partnered with cross-functional teams to ensure timely delivery of projects, which led to an improvement in client satisfaction.",
        "Implemented actionable feedback during code reviews, enhancing code quality 	across the team.",
      ],
    },
    {
      title: "Frontend Developer (Remote)",
      company_name: "Techathon",
      icon: techathon,
      iconBg: "#E6DEDD",
      date: "October 2022 - December 2022",
      points: [
        "Architected and maintained responsive web applications using Next, Chakra UI, and Tailwind, achieving a boost in cross-browser compatibility and increase in user experience",
        "Collaborated with cross-functional teams to develop high-quality products that increased the user experience, resulting in an increase in user retention.",
      ],
    },
    {
      title: "IT Support Engineer",
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
      name: "Uber-clone",
      web_link:"",
      category:"app",
      description:
        "This is an uber clone. It allows users to book ride and make payment of their rides during or after they have reached their destination",
      tags: [
        {
          name: "React-Native",
          color: "blue-text-gradient",
        },
        {
          name: "Clerk",
          color: "green-text-gradient",
        },
        {
          name: "Neon",
          color: "pink-text-gradient",
        },
        {
          name: "Stripe",
          color: "blue-text-gradient",
        },
        {
          name: "mobile-app",
          color: "orange-text-gradient",
        },
      ],
      image: Uberclone,
      source_code_link: "https://github.com/amgenious/uberclone",
    },
    {
      name: "Aora App",
      web_link:"",
      category:"app",
      description:
        "Aora is a platform the allows user to post videos and pictures of themselves or any memorable event in their life",
      tags: [
        {
          name: "React-Native",
          color: "blue-text-gradient",
        },
        {
          name: "Clerk",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
        {
          name: "mobile-app",
          color: "orange-text-gradient",
        },
      ],
      image: Aora,
      source_code_link: "https://github.com/amgenious/aora",
    },
    {
      name: "Create Business App",
      web_link:"",
      category:"app",
      description:
        "This is an app the allows user to create any business of their choice and share with their customers to buy from them.",
      tags: [
        {
          name: "React-Native",
          color: "blue-text-gradient",
        },
        {
          name: "Clerk",
          color: "green-text-gradient",
        },
        {
          name: "Firbase",
          color: "pink-text-gradient",
        },
        {
          name: "mobile-app",
          color: "orange-text-gradient",
        },
      ],
      image: Business,
      source_code_link: "https://github.com/amgenious/business_app",
    },
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
      source_code_link: "https://github.com/amgenious/todo-app",
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
      source_code_link: "https://github.com/amgenious/ecommence-nike",
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
      name: "Norandy Ecommerce App",
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
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "mobile-app",
          color: "orange-text-gradient",
        },
      ],
      image: ecommerce1,
      source_code_link: "https://github.com/amgenious/ecommerce-norandy",
    },
    {
      name: "3D Shirt Editor",
      category:"web",
      web_link:"https://3d-shirt-navy.vercel.app/",
      description:
        "This is a 3d Shirt Editor that allows users to upload their logos or textures and also change the color of the shirt to their preferences.",
      tags: [
        {
          name: "Vite",
          color: "blue-text-gradient",
        },
        {
          name: "React JS",
          color: "green-text-gradient",
        },
        {
          name: "Three JS",
          color: "orange-text-gradient",
        },
        {
          name: "website",
          color: "pink-text-gradient",
        },
      ],
      image: threedshirt,
      source_code_link: "https://github.com/amgenious/3D-shirt",
    },
    {
      name: "Admin Voting System",
      category:"web",
      web_link:"https://adminvotingsystem.vercel.app",
      description:
        "This is a web app for am admin to create elections, clubs and ballot paper of an election. The admin can also add members to a club to enable them to vote",
      tags: [
        {
          name: "Next ts",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "Clerk",
          color: "orange-text-gradient",
        },
        {
          name: "website",
          color: "pink-text-gradient",
        },
      ],
      image: voteadmin,
      source_code_link: "https://github.com/amgenious/vehicle-management-system-admin",
    },
    {
      name: "User Voting System",
      category:"web",
      web_link:"https://uservotingsystem.vercel.app",
      description:
        "This is an online voting system that allow users to vote in a particular club that is he/she is added to vote during their elections",
      tags: [
        {
          name: "Next ts",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "Clerk",
          color: "orange-text-gradient",
        },
        {
          name: "website",
          color: "pink-text-gradient",
        },
      ],
      image: voteuser,
      source_code_link: "https://github.com/amgenious/vehicle-management-system-employee",
    },
    {
      name: "My designs",
      category:"web",
      web_link:"https://mydesigns.vercel.app",
      description:
        "This is a platform where I show case my graphic design skills and the psds are all free to download",
      tags: [
        {
          name: "Next js",
          color: "blue-text-gradient",
        },
        {
          name: "website",
          color: "pink-text-gradient",
        },
      ],
      image: mydesign,
      source_code_link: "https://github.com/amgenious/mydesign",
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
      category:"web",
      description:" This is website that allows users to store data on the web for them.",
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
      source_code_link: "https://github.com/amgenious/chare_v1",
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
      category:"web",
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