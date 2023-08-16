import { useState, useEffect } from 'react';
import styles from './Header.module.sass';

import { useLanguage } from '../Translation/LanguageContext';

const generateSVG = (text: string, numberOfShapes: number) => {
  const getRandomFont = () => {
    const fonts = [
      "Arial",
      "Helvetica",
      "Times New Roman",
      "Times",
      "Courier New",
      "Courier",
      "Verdana",
      "Georgia",
      "Palatino",
      "Garamond"
    ];

    //return fonts[Math.floor(Math.random() * fonts.length)];
    return fonts[6];
  }


  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getRandomShape = () => {
    const shapes = [
      `circle cx="${getRandomNumber(10, 70)}" cy="${getRandomNumber(40, 70)}" r="${getRandomNumber(5, 30)}"`,
      `rect x="${getRandomNumber(10, 80)}" y="${getRandomNumber(10, 80)}" width="${getRandomNumber(10, 40)}" height="${getRandomNumber(10, 40)}"`,
      `ellipse cx="${getRandomNumber(10, 70)}" cy="${getRandomNumber(40, 70)}" rx="${getRandomNumber(5, 30)}" ry="${getRandomNumber(5, 30)}"`,
      `polygon points="${getRandomNumber(10, 80)},${getRandomNumber(10, 80)}, ${getRandomNumber(10, 80)},${getRandomNumber(10, 80)} ${getRandomNumber(10, 80)},${getRandomNumber(10, 80)}"`
    ];

    return shapes[Math.floor(Math.random() * shapes.length)];
  }

  const svgShapes = Array.from({ length: numberOfShapes }, getRandomShape);

  const svg = `<svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">

  <style>
    @keyframes rotateLeft {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes rotateRight {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }

    @keyframes scaleSmall {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(0.5);
      }

      100% {
        transform: scale(0);
      }
    }

    @keyframes scaleBig {
      0% {
        transform: scale(1);
      }
        
      100% {
        transform: scale(5);
      }
    }

    @keyframes hide {
      0% {
        opacity: 1;
      }
      
      100% {
        opacity: 0;
      }
    }

    @keyframes leave {
      0% {
        transform: translateX(0);
        transform: translateay(0);
      }

      100% {
        transform: translateX(200px);
        transform: translateY(-200px);
      }
    }

    circle {
      animation: rotateLeft 2s linear, scaleBig 1s linear, hide 2s linear;
      animation-fill-mode: forwards;
    }

    ellipse {
      animation: rotateRight 0.1s linear infinite, leave 1s linear;
      transform-origin: center;
      animation-fill-mode: forwards;
    }

    rect {
      animation: rotateLeft 1s linear infinite, hide 1s linear;
      transform-origin: center;
      animation-fill-mode: forwards;
    }

    polygon {
      animation: rotateRight 0.5s linear, hide 1s linear;
      transform-origin: center;
      animation-fill-mode: forwards;
    }

  </style>


    ${svgShapes.map(shape => `  <${shape} fill="${getRandomColor()}"/>\n`).join('')}  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="32" font-family="${getRandomFont()}" fill="white">${text}</text>
    </svg>`;

  return btoa(svg.trim());
}



const Header = () => {
  const { language, translations } = useLanguage();

  // preload the image without animations
  const [logoData, setLogoData] = useState(
    'data:image/svg+xml;base64,' 
    + btoa(`
      <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="32" font-family="Verdana" fill="white">StringManolo</text>
      </svg>`.trim()
      )
  );

  // load a random animation when the page loads
  useEffect(() => {
    const svgData = generateSVG('StringManolo', 2);
    setLogoData(`data:image/svg+xml;base64,${svgData}`);
  }, []);

  const handleClick = () => {
    const svgData = generateSVG('StringManolo', 2);
    setLogoData(`data:image/svg+xml;base64,${svgData}`);
  };


/*// Animate constantly
  const [logoData, setLogoData] = useState(`data:image/svg+xml;base64,${generateSVG('StringManolo', 2)}`);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newLogoData = `data:image/svg+xml;base64,${generateSVG('StringManolo', 2)}`;
      setLogoData(newLogoData);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
*/

  return (
    <header className={styles['header-container']}>
      <div className={styles['logo-container']}>
        <img className={styles['logo']} src={logoData} alt="SVG Logo" onClick={handleClick} />
      </div>
      <nav className={styles['nav-container']}>
        <ul className={styles['nav-ul']}>
          <li><a className={styles['nav-link']} href="#about">{translations[language]['header-about']}</a></li>
          <li><a className={styles['nav-link']} href="#projects">{translations[language]['header-projects']}</a></li>
          <li><a className={styles['nav-link']} href="#contact">{translations[language]['header-contact']}</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
