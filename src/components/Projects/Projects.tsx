import {useLanguage} from '../Translation/LanguageContext';

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

type Project = {
	name: string;
	// Description: string;
	image: string;
	link: string;
};

const projects: Project[] = [
	{
		name: 'Termux Hacking 101',
		// Description: 'Book about basic/advanced hacking on Termux',
		image: termux,
		link: 'https://stringmanolo.github.io/hackingTermux101/',
	},
	{
		name: 'Pidgeon',
		// Description: 'Anonymous messaging server with multiple clients',
		image: pidgeon,
		link: 'https://stringmanolo.github.io/pidgeon/',
	},
	{
		name: 'SmallOS Cyberwarfare',
		// Description: 'Linux distribution for cyber warfare scenarios',
		image: soscw,
		link: 'https://github.com/smallOS-cyberwarfare/smallOS-cyberwarfare',
	},
	{
		name: 'Nbmxbsf',
		// Description: 'Telegram bot with PE, ransomware, etc modules',
		image: nbmxbsf,
		link: 'https://github.com/StringManolo/nbmxbsf',
	},
	{
		name: 'Telegram Bot Sh',
		// Description: 'Telegram bot written in Bash',
		image: tgbotsh,
		link: 'https://github.com/StringManolo/tgbot.sh',
	},
	{
		name: 'Ngrok Open Source',
		// Description: 'Open-source client for Ngrok service',
		image: ngrok,
		link: 'https://github.com/StringManolo/ngrok',
	},
	{
		name: '0pen Private 5earch',
		// Description: 'Fullstack search engine',
		image: op5,
		link: 'https://github.com/StringManolo/0P5#video-preview',
	},
	{
		name: 'Simple Arguments Parser',
		// Description: 'Library/Module to create CLI tools with JS or TS',
		image: sap,
		link: 'https://github.com/StringManolo/simpleArgumentsParser',
	},
	{
		name: '1337',
		// Description: 'Collection of utilities in JS for hacking',
		image: h1337,
		link: 'https://github.com/StringManolo/1337',
	},
	{
		name: 'CppJs',
		// Description: 'Library for programming in C++ using JS-like syntax sugar',
		image: cppjs,
		link: 'https://github.com/StringManolo/cppjs',
	},
	{
		name: 'Fast Framework',
		// Description: 'Minimal web framework that doesn\'t require compilation/transpilation',
		image: ff2,
		link: 'https://github.com/StringManolo/ff2',
	},
];

const ProjectCard: React.FC<Project> = ({name, /* description, */ image, link}) => {
	const {translations, language} = useLanguage();

	return (
		<div className={styles['project-card']}>
			<a className={styles['project-link']} href={link}>
				<h2 className={styles['project-name']}>{name}</h2>
				<p className={styles['project-description']}>
					{translations[language]['projects-' + name + '-description']}
				</p>
				<div className={styles['project-image-container']}>
					<img className={styles['project-image']} src={image} alt={name} />
				</div>
			</a>
		</div>
	);
};

const ProjectsList: React.FC = () => (
	<ul className={styles['projects-list']}>
		{projects.map(project => (
			<li key={project.name}>
				<ProjectCard {...project} />
			</li>
		))}
	</ul>
);

const Projects: React.FC = () => {
	const {translations, language} = useLanguage();

	return (
		<div className={styles['projects-container']} id='projects'>
			<header className={styles.header}>
				<h1 className={styles['header-title']}>{translations[language]['header-projects']}</h1>
			</header>
			<main>
				<ProjectsList />
			</main>
		</div>
	);
};

export default Projects;

