// useStarryBackground.ts
import { useEffect, useRef } from 'react';

const useStarryBackground = (numberOfStars: number = 100) => {
  const starsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars'; // Class for styling in CSS
    starsContainerRef.current = starsContainer;

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';

      // Set random positions for the stars
      const size = Math.random() * 3 + 1; // Star size between 1px and 4px
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.position = 'absolute';
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.transition = 'transform 0.2s ease-out'; // Smooth transition

      // Append the star to the container
      starsContainer.appendChild(star);
    }

    // Append the stars container to the body
    document.body.appendChild(starsContainer);

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const stars = starsContainer.children;

      Array.from(stars).forEach((star) => {
        const starElement = star as HTMLElement; // Cast to HTMLElement

        // Calculate offsets based on mouse position
        const starX = parseFloat(starElement.style.left) + 10 * (Math.random() - 0.5);
        const starY = parseFloat(starElement.style.top) + 10 * (Math.random() - 0.5);

        // Move the star based on mouse position with some sway effect
        starElement.style.transform = `translate(${starX - clientX / 50}px, ${starY - clientY / 50}px)`;
      });
    };

    // Add mousemove event listener
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Cleanup stars on component unmount
      starsContainer.innerHTML = '';
      document.body.removeChild(starsContainer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [numberOfStars]); // Use numberOfStars as a dependency
};

export default useStarryBackground;
