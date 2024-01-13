import { useEffect, useState } from 'react';
import styles from '../styles/styles.module.css';

const ScrollButton = () => {
  const [scrollDirection, setScrollDirection] = useState('↓');

  useEffect(() => {
    const handleScroll = () => {
      console.log('Scrolling...');

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
    return () => {
      console.log('Removing scroll event listener...');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = () => {
    console.log('Scrolling to section...');

    const sections = document.querySelectorAll('section');

    if (sections.length === 0) {
      return;
    }

    let closestSection = sections[0];
    let closestDistance = Math.abs(window.scrollY - closestSection.offsetTop + 50);

    sections.forEach((section) => {
      const sectionDistance = Math.abs(window.scrollY - section.offsetTop + 50);
      if (sectionDistance < closestDistance) {
        closestSection = section;
        closestDistance = sectionDistance;
      }
    });

    closestSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button onClick={scrollToSection} className={styles.scrollButton}>
      {scrollDirection}
    </button>
  );
};

export default ScrollButton;
