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
  subtitle: 'I\'m a Junior Web Developer',
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
    img: 'covidpic.jpg',
    title: 'Covid Supplies',
    info: 'Full-Stack E-commerce website based on the Covid-19 Global pandemic',
    info2: 'Key Features include: Stripe API integration to authenticate purchases, Swiper API for a Carousel slideshow, EJS file to maintain store items. Created using: JavaScript, Bootstrap, HTML/CSS, Node',
    url: 'https://covidsupplies.herokuapp.com',
    repo: 'https://github.com/aladin94/CovidSupplies', 
  },
  {
  id: uuidv1(),
    img: 'odinsgrill-portfolio.png',
    title: 'OdinsGrill Restaurant',
    info: 'Front-End website for my favorite restaurant. Utilizes the Google Developer API to incorporate Maps',
    info2: 'Key Features include: Desktop-First modern and responsive design, API integration. Created using: JavaScript, HTML5, CSS, Node',
    url: 'https://odinsgrill.netlify.app',
    repo: 'https://github.com/aladin94/Odinsgrill',
  },
  {
    id: uuidv1(),
    img: 'namastay.jpg',
    title: 'NamaStay Calm',
    info: 'Front-End Meditation website designed to offer users a calming experience',
    info2: 'Key Features include: HTML5 Video / Audio, Vanilla JS, Flexbox, Font Awesome Icons. Created using: JavaScript (ES6), HTML, CSS',
    url: 'http://namastaycalm.surge.sh',
    repo: 'https://github.com/aladin94/NamaStayCalm', 
  },
  {
    id: uuidv1(),
    img: 'bb.jpg',
    title: 'Breaking Bad Fansite',
    info: 'Front-End website based on the hit TV show Breaking Bad',
    info2: 'Key Features include: Responsive Mobile/Desktop design, API integration, CSS Grid. Created using: JavaScript, React, Axios, HTML, CSS',
    url: 'https://breakingbadaf.netlify.app',
    repo: 'https://github.com/aladin94/BreakingBadProject', 
  },
  {
    id: uuidv1(),
    img: 'snippit.jpg',
    title: 'Chatterbox',
    info: 'Full-stack chatroom app built using JavaScript (frontend) and Node / express (backend)',
    info2: 'Key Features include: User Authentication, Identity Protection, Typing Indicator. Created using: JavaScript, WebSockets, Express, HTML / CSS',
    url: 'https://chatterbox-messenger-app.herokuapp.com/',
    repo: 'https://github.com/aladin94/Chatterbox-2.0',
  },
  {
    id: uuidv1(),
    img: 'frontpagelayout.png',
    title: 'LyricFinder',
    info: 'Full-stack web app that utilizes the MusixMatch Developer API, as well as Sass and Bootstrap for a modern interface',
    info2: 'Key Features include: Mobile First design, API integration, React Hooks. Created using: JavaScript, React, Axios, HTML5, CSS, Bootstrap, Node',
    url: 'https://aladin-lyricfinder.netlify.com',
    repo: 'https://github.com/aladin94/LyricFinder-Portfolio-Project-', 
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
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
