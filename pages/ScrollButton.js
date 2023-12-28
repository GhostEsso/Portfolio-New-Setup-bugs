import { useEffect, useState } from 'react';
import styles from '../styles/styles.module.css';

const ScrollButton = () => {
  const [scrollDirection, setScrollDirection] = useState('↓');

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY === 0) {
        setScrollDirection('↓');
      } else if (scrollY + windowHeight >= documentHeight) {
        setScrollDirection('↑');
      } else {
        setScrollDirection('↓');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = () => {
    const sections = document.querySelectorAll('section');
    let currentPosition = window.scrollY || window.pageYOffset;

    for (let i = 0; i < sections.length; i++) {
      const sectionPosition = sections[i].offsetTop - 50;
      if (currentPosition < sectionPosition) {
        sections[i].scrollIntoView({ behavior: 'smooth' });
        break;
      }
    }
  };

  return (
    <button onClick={scrollToSection} className={styles.scrollButton}>{scrollDirection}</button>
  );
};

export default ScrollButton;
