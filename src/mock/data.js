import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Aladin Feratovic | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey, my name is',
  name: 'Aladin.',
  subtitle: 'I\'m a Full-Stack Web Developer.',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'Thanks for visiting my page! A little about myself.',
  paragraphTwo: 'I\'m a Web Developer and Programmer living in New York City. Over the past 2 years of self-educating, I have acquired a wide range of skills in Front-End (JavaScript/React, HTML, CSS) and Backend Development (Node, Express, MongoDB, Rest, SQL, Django).',
  paragraphThree: 'My interests include Blogging, Traveling, and Machine Learning. Please check my Github or Resume below!',
  resume: 'https://aladin94.github.io/resume/',
};

// PROJECTS DATA odinsgrill-portfolio.png
export const projectsData = [
    {
    id: uuidv1(),
    img: 'bootcamppic.png',
    title: 'Fictional Coding Bootcamp',
    info: 'Front-End mock website for a Fictional Coding Bootcamp.',
    info2: 'Key Features include: Bootstrap Desktop / Mobile interface, CSS Modal, Cards, MapBox API, and Bootstrap5 Icons. Created using: JavaScript, HTML, CSS',
    url: 'http://fictionalbootcamp.surge.sh',
    repo: 'https://github.com/aladin94/Fictional-Bootcamp', 
  },
    {
    id: uuidv1(),
    img: 'datadogpic.png',
    title: 'DataDog UX/UI',
    info: 'Front-End design replica of the Datadog corporate website.',
    info2: 'Key Features include: Flexbox, Desktop / Mobile interface, Font Awesome Icons. Created using: HUGO, HTML, SCSS',
    url: 'http://aladindatadog.surge.sh',
    repo: 'https://github.com/aladin94/Datadog', 
  },
    {
    id: uuidv1(),
    img: 'amagit.png',
    title: 'Amazon Clone',
    info: 'Full-Stack E-commerce clone website based on Amazon',
    info2: 'Key Features include: User Authentication, PayPal Payment Integration, Desktop / Mobile interface. Created using: JavaScript, React, HTML, CSS, Node, FireBase',
    url: 'https://clonealadin.web.app',
    repo: 'https://github.com/aladin94/AmazonClone', 
  },
  {
    id: uuidv1(),
    img: 'covidpic.jpg',
    title: 'Covid Supplies',
    info: 'Full-Stack E-commerce website based on the Covid-19 Global pandemic',
    info2: 'Key Features include: Stripe API integration to authenticate purchases, Swiper API for a Carousel slideshow, EJS file to maintain store items. Created using: JavaScript, Bootstrap, HTML/CSS, Node',
    url: 'https://covidsupplies.herokuapp.com',
    repo: 'https://github.com/aladin94/CovidSupplies', 
  },
  {
    id: uuidv1(),
    img: 'bomb.png',
    title: 'BombSweeper!',
    info: 'Front-End website based on classic MineSweeper computer game, but with a BomberMan UI',
    info2: 'Key Features include: Surge FrontEnd Hosting, CSS Grid. Created using: JavaScript, React, HTML, CSS',
    url: 'http://bombsweeper.surge.sh',
    repo: 'https://github.com/aladin94/minesweeper', 
  },
  {
    id: uuidv1(),
    img: 'snippit.jpg',
    title: 'Chatter-Box',
    info: 'Full-stack chatroom app built using JavaScript (frontend) and Node / express (backend)',
    info2: 'Key Features include: User Authentication, Identity Protection, Typing Indicator. Created using: JavaScript, WebSockets, Express, HTML / CSS',
    url: 'https://chatterbox-messenger-app.herokuapp.com/',
    repo: 'https://github.com/aladin94/Chatterbox-2.0',
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'aladin.feratovic@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/aladin94',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aladinferatovic/',
    },
    {
      id: uuidv1(),
      name: '',
      url: 'https://helloworldofdata.webnode.com/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork button
};
