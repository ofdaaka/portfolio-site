import React from "react";
import uber from '../assets/images/uber1.PNG';
import portShot from '../assets/images/portfolioShot.PNG';
import nucamp from '../assets/images/nucamp1.PNG';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import { AssignmentOutlined, Language, WebOutlined, Storefront } from "@material-ui/icons";

const resumeData = {
  name: "Olufemi Daaka",
  title: "Full Stack Developer",

  birthday: "09th December 1987",
  job: "Freelancer",
  email: "Ofdaaka@gmail.com",
  city: "Washington, DC",
  signature: "Only Settle For Your Dreams",

  about:
    " My journey didn't start as a software engineer no, my journey started at a young age always wanting to create. From characters in a self-made comic book, building architecture in AutoCAD all the way to poetry.  As I fell deeper in love with poetry it became an escape from the harsh realities of my environment at times. Over time poetry became a love for hiphop and writing music. Then For nearly a decade, I pursued a career as an artist and that journey springboarded me to cities with opportunities and comfort zones to be broken. By Costarring in sold-out musicals too Cohosting on urban media outlets, I stepped into different avenues because you'll never know success unless you try.",
  aboutSecond: 
    " For years I served in restaurants and performed on various stages. Some big some small, none more significant than the A3C music festival located in Atlanta. Looking at it now my love for music landed me in the city but, the Per Scholas opportunity changed my life by throwing me into the software engineering world. I stumbled upon the tech non-profit while searching for an alternative to Georgia Tech's pricier coding Bootcamp. With the completion of the rigorous 6-week program, I earned a scholarship to general assembly and the rest is history",
    
  socials: {
    Linkedin: {
      link: "https://linkedin.com/in/olufemi-daaka-056968191",
      text: "My Linkedin",
      icon: <LinkedInIcon />,
    },
    Twitter: {
      link: "https://twitter.com/3rdEyeDevelop3r",
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
        "I serve a fine dining experience to guests, with a major focus on sales and guest appreciation.",
    },
    {
      title: "Capitol Blue Cross",
      date: "Sep 2019 - Feb 2020",
      description:
        "We provided customer service for members in regards to insurance information and company policies",
    },
    {
      title: "Poor Calvins",
      date: "Jan 2018 - June 2019",
      description:
        "A fine dinning restaraunt that infused southern and vietnamese cuisine to create breath taking dishes. From pairing wine and cocktails to compliment the guests meal to establishing a great rapport for a continued relationship.",
    },
    {
      title: "The Vortex",
      date: "May 2017 - Jan 2018",
      description:
        " An experience was delivered with the aid of spirits, while providing exceptional service and amazing burgers.",
    },
    {
      title: "Cubra Libre",
      date: "May 2015 - April 2017",
      description:
        " Cuban restaruant that specialized in mojioto's.",
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
      description: 'Utilized Next Js route system and created the makings of an uber clone, with firebase authentication and Mapbox used for location. Styling was done using Tailwind Css',
      links: [
        { link: 'https://github.com/ofdaaka/uber-next-clone', icon: <GitHubIcon /> },
        { link: 'https://uber-next-clone-vt8sygvaj-ofdaaka.vercel.app/login', icon: <Language /> },
      ],
    },
    {
      tag:'React Js',
      image: portShot,
      title: 'Portfolio Website',
      caption: 'Completely Dynamic React Site',
      description: 'Created with React , and Material-UI for styling this portfolio site is completely dynamic ',
      links: [
        { link: 'https://github.com/ofdaaka/portfolio-site', icon: <GitHubIcon /> },
        { link: 'http://www.odaaka.com', icon: <Language /> },
      ]
    },
    {
      tag:'MERN Stack',
      image: nucamp,
      title: 'Nucamp Campsite',
      caption: 'MERN Stack',
      description: 'Utilized mongodb, express, react aswell as node to create this fictious website based on a coding bootcamp. It allows user login, aswell as comments and the ability to add favorite campsites. ',
      links: [
        { link: 'https://github.com/ofdaaka/nucampsite-aws', icon: <GitHubIcon /> },
        { link: 'http://3.128.197.50/home', icon: <Language /> },
      ]
    }
  ]
};

export default resumeData;
