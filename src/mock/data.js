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
  paragraphTwo: 'I\'m a Web Developer and Programmer living in New York City. Over the past 2 years of self-eduating, I have acquired a wide range of skills in Front-End (JavaScript/React, HTML, CSS) and Backend Development (Node, Express, MongoDB, Rest, SQL, Django).',
  paragraphThree: 'My interests include Blogging, Traveling, and Machine Learning. Please check my Github or Resume below!',
  resume: 'https://aladin94.github.io/resume/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'frontpagelayout.png',
    title: 'LyricFinder',
    info: 'Full-stack web app that utilizes the MusixMatch Developer API, as well as Sass and Bootstrap for a modern interface',
    info2: 'Key Features include: Mobile First design, API integration, React Hooks. Created using: JavaScript, React, Axios, HTML5, CSS, Bootstrap, Node.',
    url: 'https://aladin-lyricfinder.netlify.com',
    repo: 'https://github.com/aladin94/LyricFinder-Portfolio-Project-', 
  },
  {
    id: uuidv1(),
    img: 'chatroom.png',
    title: 'Chatterbox',
    info: 'Full-stack chatroom app built using React (frontend) and Node / express (backend).',
    info2: 'Key Features include: User Authentication, Identity Protection, Typing Indicator. Created using: JavaScript, React, Chatkit, Express, RESTful API.',
    url: 'https://mychatterboxapp.herokuapp.com/',
    repo: 'https://github.com/aladin94/Chatterbox',
  },
  {
    id: uuidv1(),
    img: 'spotifyexample.png',
    title: 'Spotify User GUI',
    info: 'Web App that utilizes the Spotify Developer API to create a music player which shows the current song information that the user is listening to, including Track Title and artist',
    info2: 'Key features include: User Authentication, Spotify API Integration, and a barebones Interface. Created using: JavaScript, React, jQuery, HTML, CSS, AJAX.',
    url: 'https://aladin-spotifyplayer.netlify.com/',
    repo: 'https://github.com/aladin94/SpotifyPlayer', 
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
      name: '',
      url: 'https://helloworldofdata.webnode.com/',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aladinferatovic/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/aladin94',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
