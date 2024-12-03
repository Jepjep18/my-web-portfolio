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
    tailwind,
    nodejs,
    git,
    figma,
    waternetic,
    btms12,
    internship,
    doctrak,
    abfi,
    angular,
    php,
    dotnet,
    bootstrap,
    jwt,
    nextjs,
    mysql,
    canva,
    csharp,
    github,
    swagger,
    
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
    {
      id: "resume",
      title: "Resume"
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "Angular",
      icon: angular,
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
      name: "php",
      icon: php
    },
    {
      name: "dotnet",
      icon: dotnet
    },
    {
      name: "bootstrap",
      icon: bootstrap
    },
    {
      name: "jwt",
      icon: jwt
    },
    {
      name: "nextjs",
      icon: nextjs
    },
    {
      name: "mysql",
      icon: mysql
    },
    {
      name: "canva" , 
      icon: canva
    },
    {
      name: "csharp",
      icon: csharp
    },
    {
      name: "github",
      icon: github
    },
    {
      name: "swagger",
      icon: swagger
    }
    
    
   
   
    
  ];
  
  const experiences = [
    {
      title: "Software Developer Jr.",
      company_name: "Ana's Breeders Farm, INC.",
      icon: abfi,
      iconBg: "#383E56",
      date: "May 2024 - Present",
      points: [
        "Developing and maintaining web applications with AngularJS and .NET, including RESTful APIs built in .NET.",
        "Collaborating with clients, designers, and managers to ensure a smooth workflow and deliver high-quality projects.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Laravel Developer",
      company_name: "Internship",
      icon: internship,
      iconBg: "#383E56",
      date: "December 2023 - May 2024",
      points: [
        "Developing and maintaining web applications using Laravel and other related technologies.",
        "Collaborating with cross-functional teams including designers and other developers ",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
    
    
  ];

  const testimonialss = [
    {
      testimonial: 
        ""
    }
  ]
  
  const testimonials = [
    {
      testimonial:
        "He is an outstanding teammate—skilled, creative, and always ready to tackle challenges with smart, effective solutions. A true asset to any project!",
      name: "James Tabilog",
      designation: "Backend Developer",
      company: "CISDEVO Department",
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
      name: "Waternetic",
      description:
        "Capstone Project 2024 - Waternetic is an all-in-one digitalized water system to make transactions easier and faster. This application aims to provide a digital system in a private subdivision for smoother transactions than usual. Conserve energy and effort.",
      tags: [
        {
          name: "PHP",
          color: "text-gradient-blue",
        },
        {
          name: "MySQL",
          color: "text-gradient-orange",
        },
        {
          name: "Bootstrap",
          color: "text-gradient-purple",
        },
      ],
      image: waternetic,
      source_code_link: "https://github.com/Jepjep18/Waternetic.git",
    },
    {
      name: "DocTrack",
      description:
        "The Documents Tracking System is a Laravel-based solution for the Department of Information and Communications Technology Region XI, enabling efficient management and tracking of documents to enhance productivity.",
      tags: [
        {
          name: "Laravel",
          color: "text-gradient-red", 
        },
        {
          name: "SQL",
          color: "text-gradient-blue",
        },
        {
          name: "Flowbite UI",
          color: "text-gradient-teal",
        },
      ],
      image: doctrak,
      source_code_link: "https://github.com/Jepjep18/Documents_tracking.git",
    },
    {
      name: "BTMS",
      description:
        "Battery and Tire Inventory Management System: Streamline tracking, status monitoring, and record-keeping for efficient and accurate inventory control in one centralized platform.",
      tags: [
        {
          name: "Angular",
          color: "text-gradient-red", 
        },
        {
          name: "REST API",
          color: "text-gradient-green", 
        },
        {
          name: "Material UI",
          color: "text-gradient-blue",
        },
        {
          name: "MySQL",
          color: "text-gradient-orange", 
        },
      ],
      image: btms12,
      source_code_link: "https://github.com/",
    },
    
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };