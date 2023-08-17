import styles from './About.module.sass';
import pencilSketch from '../../assets/me-pencil-sketch.webp';
import noPencilSketch from '../../assets/no-pencil-sketch.webp';

import {useLanguage} from '../Translation/LanguageContext';

const About = () => {
	const {language, translations} = useLanguage();

	const handleAnimationEnd = () => {
		const image = document.querySelector('#pencil-sketch')!;
		if (!(image instanceof HTMLImageElement)) {
			throw new Error('image is not an HTMLImageElement.');
		}

		image.style.animation = 'showImage 0.01s linear';
		image.style.animationFillMode = 'forwards';

		const keyframes = `@keyframes showImage {
      0% {
       width: 100px;
       margin-top: 200px;
      }

      100% {
       width: 100px;
       margin-top: 100px;
      }
    }`;

		const styleSheet = document.styleSheets[0];
		styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
	};

	const handleSketchImageClick = () => {
		const imageColor = document.querySelector('#no-pencil-sketch')!;
		if (!(imageColor instanceof HTMLImageElement)) {
			throw new Error('imageColor is not an HTMLImageElement.');
		}

		imageColor.style.marginTop = '100px';
		imageColor.style.width = '100px';
		imageColor.style.zIndex = '-1';

		setTimeout(() => {
			imageColor.style.zIndex = '1';
		}, 2000);

		const image = document.querySelector('#pencil-sketch')!;
		if (!(image instanceof HTMLImageElement)) {
			throw new Error('image is not an HTMLImageElement.');
		}

		image.style.animation = 'hideImage 2s linear';
		image.style.animationFillMode = 'forwards';

		const keyframes = `@keyframes hideImage {
      0% {
        opacity: 1;
        width: 100px;
      }

      50% {
        opacity: 0.5;
      }

      100% {
        opacity: 0;
        width: 100px;
      }
    }`;

		const styleSheet = document.styleSheets[0];
		styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
	};

	const handleNoSketchImageClick = () => {
		const imageColor = document.querySelector('#no-pencil-sketch')!;
		if (!(imageColor instanceof HTMLImageElement)) {
			throw new Error('imageColor is not an HTMLImageElement.');
		}

		imageColor.style.zIndex = '-1';
		imageColor.style.animation = 'hideImage 1s linear';
		imageColor.style.animationFillMode = 'forwards';

		const image = document.querySelector('#pencil-sketch')!;
		if (!(image instanceof HTMLImageElement)) {
			throw new Error('image is not an HTMLImageElement.');
		}

		setTimeout(() => {
			image.style.opacity = '0';
		}, 1000);

		const aboutDescriptionContainer = document.querySelector('#about-description-container')!;
		if (!(aboutDescriptionContainer instanceof HTMLDivElement)) {
			throw new Error('aboutDescriptionContainer is not an HTMLDivElement.');
		}

		aboutDescriptionContainer.style.animation = 'removeSpaceForImage 1s linear';
		aboutDescriptionContainer.style.animationFillMode = 'forwards';

		const keyframes = `@keyframes removeSpaceForImage {
      0% {
        margin-top: 70px
      } 

      50% {
        margin-top: 20px
      } 

      100% {
        margin-top: 0
      }
    }`;

		const styleSheet = document.styleSheets[0];
		styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
	};

	const translatedTexts = translations[language] || {};

	return (
		<div className={styles['about-container']}>
			<div className={styles.about}>
				<h1 className={styles['about-name']}>Manuel Varela Caldas</h1>
				<p className={styles['about-sup']}>{translatedTexts['about-sup']}</p>
			</div>
			<div className={styles['image-container']} id='about'>
				<img className={styles.image} src={pencilSketch} alt='Manuel Varela Caldas pencil sketch' id='pencil-sketch' onTouchStart={handleSketchImageClick} onMouseEnter={handleSketchImageClick} />
				<img className={styles.image} src={noPencilSketch} alt='Manuel Varela Caldas pencil sketch' id='no-pencil-sketch' onMouseLeave={handleNoSketchImageClick} onTouchEnd={handleNoSketchImageClick} />
			</div>
			<div className={styles['about-description-container']} onAnimationEnd={handleAnimationEnd} id='about-description-container'>
				<p className={`${styles['about-description']} ${styles['about-description-first-paragraph']}`}>
					{translatedTexts['about-description-first-paragraph']}
				</p>
				<p className={styles['about-description']}>
					{translatedTexts['about-description-second-paragraph-first-half']}
					<a href='https://foro.elhacker.net/profiles/stringmanolo-u595084.html' className={styles['about-link-inline']}>elhacker.net</a>
					{translatedTexts['about-description-second-paragraph-second-half']}
				</p>
				<p className={styles['about-description']}>
					{translatedTexts['about-description-third-paragraph']}
				</p>
			</div>
		</div>
	);
};

export default About;
