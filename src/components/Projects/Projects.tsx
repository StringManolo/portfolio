import React from 'react';

import styles from './Projects.module.sass';

import termux from '../../assets/termux.webp';
import pidgeon from '../../assets/pidgeon.webp';
import soscw from '../../assets/soscw.webp';
import nbmxbsf from '../../assets/nbmxbsf.webp';
import tgbotsh from '../../assets/tgbotsh.webp';
import ngrok from '../../assets/ngrok.webp';
import op5 from '../../assets/0P5.webp';
import sap from '../../assets/sap.webp';
import h1337 from '../../assets/1337.webp';
import cppjs from '../../assets/cppjs.webp';
import ff2 from '../../assets/ff2.webp';


/*
0P5.webp    ff2.webp              nbmxbsf.webp  sap.webp     tgbotsh.webp
1337.webp   logo.svg              ngrok.webp    soscw.webp   yohdfix.pag
cppjs.webp  me-pencil-sketch.pag  pidgeon.webp  termux.webp
*/

interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    name: 'Termux Hacking 101',
    description: 'Book about basic/advanced hacking on Termux',
    image: termux,
    link: 'https://stringmanolo.github.io/hackingTermux101/'
  },
  {
    name: 'Pidgeon',
    description: 'Anonymous messaging server with multiple clients',
    image: pidgeon,
    link: 'https://github.com/StringManolo/pidgeon'
  },
  {
    name: 'SmallOS Cyberwarfare',
    description: 'Linux distribution for cyber warfare scenarios',
    image: soscw,
    link: 'https://github.com/smallOS-cyberwarfare/smallOS-cyberwarfare'
  },
  {
    name: 'Nbmxbsf',
    description: 'Telegram bot with PE, ransomware, etc modules',
    image: nbmxbsf,
    link: 'https://github.com/StringManolo/nbmxbsf'
  },
  {
    name: 'Telegram Bot Sh',
    description: 'Telegram bot written in Bash',
    image: tgbotsh,
    link: 'https://github.com/StringManolo/tgbot.sh'
  },
  {
    name: 'Ngrok Open Source',
    description: 'Open-source client for Ngrok service',
    image: ngrok,
    link: 'https://github.com/StringManolo/ngrok'
  },
  {
    name: '0peni Private 5earch',
    description: 'Fullstack search engine',
    image: op5,
    link: 'https://github.com/StringManolo/0P5'
  },
  {
    name: 'Simple Arguments Parser',
    description: 'Library/Module to create CLI tools with JS or TS',
    image: sap,
    link: 'https://github.com/StringManolo/simpleArgumentsParser'
  },
  {
    name: '1337',
    description: 'Collection of utilities in JS for hacking',
    image: h1337,
    link: 'https://github.com/StringManolo/1337'
  },
  {
    name: 'CppJs',
    description: 'Library for programming in C++ using JS-like syntax sugar',
    image: cppjs,
    link: 'https://github.com/StringManolo/cppjs'
  },
  {
    name: 'Fast Framework',
    description: 'Minimal web framework that doesn\'t require compilation/transpilation',
    image: ff2,
    link: 'https://github.com/StringManolo/ff2'
  }
];


const ProjectCard: React.FC<Project> = ({ name, description, image, link }) => (
  <div className={styles['project-card']}>
    <h2 className={styles['project-name']}>
      <a className={styles['project-link']} href={link}>{name}</a>
    </h2>
    <p className={styles['project-description']}>{description}</p>
    <div className={styles['project-image-container']}>
      <img className={styles['project-image']} src={image} alt={name} />
    </div>
  </div>
);

const ProjectsList: React.FC = () => (
  <ul className={styles['projects-list']}>
    {projects.map(project => (
      <li key={project.name}>
        <ProjectCard {...project} />
      </li>
    ))}
  </ul>
);


/* TODO: Extract footer */
const Projects: React.FC = () => (
  <div className={styles['projects-container']} id="projects">
    <header className={styles['header']}>
      <h1 className={styles['header-title']}>Projects</h1>
    </header>
    <main>
      <ProjectsList />
    </main>
  </div>
);

export default Projects;

