import React from "react";
import uber from '../assets/images/uber1.PNG'
import nucamp from '../assets/images/nucamp1.PNG'
import portShot from '../assets/images/portfolioShot.PNG'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { AssignmentOutlined, Language, WebOutlined, YouTube, Storefront, Web } from "@material-ui/icons";

const resumeData = {
  name: "Olufemi Daaka",
  title: "Full Stack Developer",

  birthday: "09th December 1987",
  job: "Freelancer",
  email: "Ofdaaka@gmail.com",
  city: "Washington, DC",
  signature: "Only Settle For Your Dreams",

  about:
    "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. \n\n  Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",

  socials: {
    Facebook: {
      link: "https://www.facebook.com",
      text: "My Facebook",
      icon: <FacebookIcon />,
    },
    Linkedin: {
      link: "https://linkedin.com/in/olufemi-daaka-056968191",
      text: "My Linkedin",
      icon: <LinkedInIcon />,
    },
    Twitter: {
      link: "https://www.twitter.com",
      text: "My twitter",
      icon: <TwitterIcon />,
    },
    GitHub: {
      link: "https://github.com/ofdaaka",
      text: "My GitHub",
      icon: <GitHubIcon />,
    },
  },

  experiences: [
    {
      title: "Morton's Steakhouse",
      date: "June 2021 - Present",
      description:
        "I serve an enjoyable experience to guests, with a major focus on sales and customer service.",
    },
    {
      title: "Capitol Blue Cross",
      date: "Aug 2019 - Feb 2020",
      description:
        "I provided customer service for members in regards to insurance information and company policies",
    },
    {
      title: "Poor Calvins",
      date: "Jan 2018 - Aug 2019",
      description:
        "A fine dinning restaraunt that infused southern and vietnamese cuisine to create breath taking dishes. From pairing wine and cocktails to compliment the guests meal to establishing a great rapport for a continued relationship.",
    },
    {
      title: "The Vortex ",
      date: "May 2017 - Jan 2018",
      description:
        " I delievered an experience with the aid of spirits, while providing exceptional service and amazing burgers.",
    },
  ],

  educations: [
    {
      title: "Nucamp Coding Bootcamp - FrontEnd and Mobile App Development",
      date: "Jan 2021 - June 2021",
      description:
        "I graduated from this fullstack bootcamp that covered the frontend starting with Bootstrap, then a deep dive into Reactjs, and React-Native for mobile app development then finished with Nodejs for the backend.",
    },
    {
      title: "General Assembly - Software Engineer Immersive",
      date: "June 2019 - Sept 2019",
      description:
        "General Assembly solidified a strong web development foundation for me, from data structures and complex algorithms to tackling javascript and its core values. Daily class projects consisted of working as a team in an agile environment.",
    },
    {
      title: "Per Scholas ",
      date: "May 2019 - June 2019",
      description:
        "The program that jumpstarted my developer career,Per Scholas is an non-profit orginization that helps minorities jump into tech. I completed the web development immersive that involved css,html and javascript.",
    },
    {
      title: "Centenary University ",
      date: "Jan 2007 - May 2012",
      description:
        "I majored in business administration with a minor in marketing.",
    },
  ],

  services: [
    {
      title: "Web Development",
      description: " Web and Mobile App Development",
      icon: <WebOutlined />,
    },
    {
      title: "S.E.O",
      description: " Search Engine Optimization Spectialists",
      icon: <AssignmentOutlined />,
    },
    {
      title: "Shopify Design",
      description: " Shopify Storefront Design & Deployment ",
      icon: <Storefront />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: ["ReactJs", "JavaScript", "NextJs", "Gatsbyjs"],
    },
    {
      title: "BACK-END / DATABASES",
      description: ["NodeJS", "Firebase","AWS", "MongoDB", "GraphQL"],
    },
    {
      title: "CSS FRAMEWORKS / UI",
      description: ["CSS","Bootstrap", "Material-UI", "TailWind"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "GitHub", "SCRUM/Agile"],
    },
  ],

  projects: [
    {
      tag:'Next Js',
      image: uber,
      title: 'Uber Clone',
      caption: 'Next js & Firebase uber clone',
      description: 'Utilized Next Js superiour route system and created the makings of an uber clone, with firebase authentication and Mapbox used for Location. Styling was done using tailwind Css',
      links: [
        { link: 'https://www.taylormadesj.com', icon: <YouTube /> },
        { link: 'https://www.taylormadesj.com', icon: <GitHubIcon /> },
        { link: 'https://www.taylormadesj.com', icon: <Language /> },
      ],
    },
    {
      tag:'React',
      image: portShot,
      title: 'Portfolio Website',
      caption: 'Completely dynamic site',
      description: 'Created with React , and Material-UI for styling this portfolio site is completely dynamic ',
      links: [
        { link: 'https://www.taylormadesj.com', icon: <YouTube /> },
        { link: 'https://www.taylormadesj.com', icon: <GitHubIcon /> },
        { link: 'https://www.taylormadesj.com', icon: <Language /> },
      ]
    },
    {
      tag:'MERN Stack',
      image: nucamp,
      title: 'Nucamp Campsite',
      caption: 'Full Stack site',
      description: 'Utilized mongodb, express, react aswell as node to create this fictious website based on a coding bootcamp. It allows user login, aswell as comments and the ability to add favorite campsites. ',
      links: [
        { link: 'https://www.taylormadesj.com', icon: <YouTube /> },
        { link: 'https://www.taylormadesj.com', icon: <GitHubIcon /> },
        { link: 'https://www.taylormadesj.com', icon: <Language /> },
      ]
    }
  ]
};

export default resumeData;
