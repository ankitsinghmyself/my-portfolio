import React, { useEffect, useState } from "react";
import "./CustomCursor.css"; // Ensure this CSS file exists

// Define types
interface Position {
  x: number;
  y: number;
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface Explosion {
  id: number;
  x: number;
  y: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [stars, setStars] = useState<Star[]>([]);
  const [explosions, setExplosions] = useState<Explosion[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX + window.scrollX, y: e.clientY + window.scrollY });

      const targetElement = e.target as HTMLElement;
      const isInteractive =
        ["A", "BUTTON", "SVG"].includes(targetElement.tagName) ||
        targetElement.classList.contains("btnC") ||
        targetElement.classList.contains("chipC") ||
        window.getComputedStyle(targetElement).cursor === "pointer";

      setIsHovering(isInteractive);
      document.body.style.backgroundColor = isInteractive ? "#111" : "#000";

      // Add a glowing particle effect (small sparks on mouse move)
      const newStar: Star = {
        id: Math.random(),
        x: e.clientX + window.scrollX,
        y: e.clientY + window.scrollY,
        size: Math.random() * 5 + 3, // Random size between 3px and 8px
        opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1
      };

      setStars((prevStars) => [...prevStars, newStar]);

      setTimeout(() => {
        setStars((prevStars) => prevStars.filter((star) => star.id !== newStar.id));
      }, 500);
    };

    const handleClick = (e: MouseEvent) => {
      // Create an explosion effect on click
      const newExplosion: Explosion = {
        id: Math.random(),
        x: e.clientX + window.scrollX,
        y: e.clientY + window.scrollY,
      };

      setExplosions((prevExplosions) => [...prevExplosions, newExplosion]);

      setTimeout(() => {
        setExplosions((prevExplosions) => prevExplosions.filter((exp) => exp.id !== newExplosion.id));
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      {/* Cursor element */}
      <div
        className="cursor"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: isHovering ? "15px" : "15px",
          height: isHovering ? "15px" : "15px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.7)",
        }}
      />

      {/* Spark trail effect */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star-trail"
          style={{
            top: `${star.y}px`,
            left: `${star.x}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Click explosion effect */}
      {explosions.map((explosion) => (
        <div
          key={explosion.id}
          className="star-explosion"
          style={{
            top: `${explosion.y}px`,
            left: `${explosion.x}px`,
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;
