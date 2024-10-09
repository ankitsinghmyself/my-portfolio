import React, { useEffect } from 'react';
import styles from './StarryBackground.module.css'; // Import the CSS module

const StarryBackground: React.FC = () => {
  useEffect(() => {
    const starsContainer = document.querySelector(`.${styles.stars}`) as HTMLElement;
    const numberOfStars = 100; // You can change this to create more or fewer stars

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = styles.star;

      // Set random positions for the stars
      const size = Math.random() * 3 + 1; // Star size between 1px and 4px
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;

      // Append the star to the container
      starsContainer.appendChild(star);
    }

    return () => {
      // Cleanup stars on component unmount
      starsContainer.innerHTML = '';
    };
  }, []); // Empty dependency array to run effect once on mount

  return <div className={styles.stars}></div>;
};

export default StarryBackground;
