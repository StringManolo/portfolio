import { it, describe, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Footer from '../../../src/components/Footer/Footer';

import telegramIcon from '../../../src/assets/footer_icons/telegram.svg';
import linkedinIcon from '../../../src/assets/footer_icons/linkedin.svg';
import twitterIcon from '../../../src/assets/footer_icons/twitterx.svg';
import ehnIcon from '../../../src/assets/footer_icons/ehn.svg';
import gmailIcon from '../../../src/assets/footer_icons/gmail.svg';
import githubIcon from '../../../src/assets/footer_icons/github.svg';

describe('Footer', () => {
  it('renders', () => {
    render(<Footer />);
    screen.debug();
  });

  it('check if footer exists', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('check if nav exists', () => {
    render(<Footer />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('check if anchors exists', () => {
    render(<Footer />);
    const anchors = screen.getAllByRole('link');
    expect(anchors).toHaveLength(6);
  }); 

  it('check if imgs exists', () => {
    render(<Footer />);
    const imgs = screen.getAllByRole('img');
    expect(imgs).toHaveLength(6);
  });

  it('contains correct images', () => {
    render(<Footer />);

    const imgSrcs = [
      { alt: 'Telegram Icon', src: telegramIcon },
      { alt: 'LinkedIn Icon', src: linkedinIcon },
      { alt: 'Twitter_x Icon', src: twitterIcon },
      { alt: 'ElHacker.net Icon', src: ehnIcon },
      { alt: 'Gmail Icon', src: gmailIcon },
      { alt: 'Sponsor on GitHub', src: githubIcon },
    ];

    imgSrcs.forEach((imgSrc) => {
      const img = screen.getByRole('img', { name: imgSrc.alt });
      expect(img).toHaveAttribute('src', imgSrc.src);
    })
  });

});
