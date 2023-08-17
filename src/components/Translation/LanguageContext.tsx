import React, {createContext, useContext, useState} from 'react';

type Translations = Record<string, Record<string, string>>;

type LanguageContextType = {
	language: string;
	changeLanguage: (language: string) => void;
	translations: Translations;
};

const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

const translations: Translations = {
	en: {
		'about-sup': 'Full Stack Developer',
		'about-description-first-paragraph': 'I\'m a self-taught creative from Galicia, Spain, born in 1993',
		'about-description-second-paragraph-first-half': 'I\'ve ventured into cybersecurity, actively contributing to ',
		'about-description-second-paragraph-second-half': ', a prominent Spanish hacking community',
		'about-description-third-paragraph': 'This journey has honed skills to breathe life into unique, innovative ideas',

		'header-about': 'About',
		'header-projects': 'Projects',
		'header-contact': 'Contact',

		'projects-Termux Hacking 101-description': 'Book about basic/advanced hacking on Termux',
		'projects-Pidgeon-description': 'Anonymous messaging server with multiple clients',
		'projects-SmallOS Cyberwarfare-description': 'Linux distribution for cyber warfare scenarios',
		'projects-Nbmxbsf-description': 'Telegram bot with PE, ransomware, etc modules',
		'projects-Telegram Bot Sh-description': 'Telegram bot written in Bash',
		'projects-Ngrok Open Source-description': 'Open-source client for Ngrok service',
		'projects-0pen Private 5earch-description': 'Fullstack search engine',
		'projects-Simple Arguments Parser-description': 'Library/Module to create CLI tools with JS or TS',
		'projects-1337-description': 'Collection of utilities in JS for hacking',
		'projects-CppJs-description': 'Library for programming in C++ using JS-like syntax sugar',
		'projects-Fast Framework-description': 'Minimal web framework that doesn\'t require compilation/transpilation',
	},
	es: {
		'about-sup': 'Desarrollador Full Stack',
		'about-description-first-paragraph': 'Soy un creativo autodidacta de Galicia, España, nacido en 1993',
		'about-description-second-paragraph-first-half': 'Me he aventurado en la seguridad informática, contribuyendo activamente a ',
		'about-description-second-paragraph-second-half': ', una comunidad de hacking española',
		'about-description-third-paragraph': 'Este viaje me ha aportado habilidades para dar vida a ideas únicas e innovadoras',

		'header-about': 'Sobre mi',
		'header-projects': 'Proyectos',
		'header-contact': 'Contacto',

		'projects-Termux Hacking 101-description': 'Libro sobre hacking básico/avanzado en Termux',
		'projects-Pidgeon-description': 'Servidor de mensajería anónima con múltiples clientes',
		'projects-SmallOS Cyberwarfare-description': 'Distribución Linux para escenarios de guerra cibernética',
		'projects-Nbmxbsf-description': 'Bot de Telegram con módulos PE, ransomware, etc',
		'projects-Telegram Bot Sh-description': 'Bot de Telegram escrito en Bash',
		'projects-Ngrok Open Source-description': 'Cliente Open Source para el servicio Ngrok',
		'projects-0pen Private 5earch-description': 'Web/Motor de búsqueda fullstack',
		'projects-Simple Arguments Parser-description': 'Módulo para crear herramientas CLI con JS o TS',
		'projects-1337-description': 'Colección de herramientas de hacking en JS',
		'projects-CppJs-description': 'Biblioteca para programación en C++ usando sintaxis JS',
		'projects-Fast Framework-description': 'Framework web que no requiere compilación/transpilación',
	},
};

type LanguageProviderProps = {
	children: React.ReactNode;
};

export function LanguageProvider({children}: LanguageProviderProps) {
	const [language, setLanguage] = useState('en');

	const changeLanguage = (language: string) => {
		setLanguage(language);
	};

	const contextValue: LanguageContextType = {
		language,
		changeLanguage,
		translations,
	};

	return (
		<LanguageContext.Provider value={contextValue}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}

	return context;
}
