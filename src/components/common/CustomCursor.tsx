import React, { useEffect, useState } from "react";
import './CustomCursor.css'; // Import the CSS file for keyframes

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [animationKey, setAnimationKey] = useState(0); // To trigger the animation

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX + window.scrollX, // Adjust for horizontal scroll
        y: e.clientY + window.scrollY, // Adjust for vertical scroll
      });

      const targetElement = e.target as HTMLElement;

      // Check if the target element is interactive
      const isInteractive =
        targetElement.tagName === "A" ||
        targetElement.tagName === "BUTTON" ||
        targetElement.tagName === "SVG" ||
        targetElement.classList.contains("btnC") ||
        targetElement.classList.contains("chipC") ||
        window.getComputedStyle(targetElement).cursor === "pointer"; // Check if the cursor style is 'pointer'

      setIsHovering(isInteractive);

      // Change body background color based on hover state
      document.body.style.backgroundColor = isInteractive ? "white" : "black";

      // Trigger animation on mouse move
      if (isInteractive) {
        setAnimationKey((prevKey) => prevKey + 1); // Change key to restart animation
      }
    };

    // Add event listener for mouse movements
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Clean up event listener
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // No dependencies here to keep the effect stable

  return (
    <div>
      {/* Custom cursor */}
      <div
        style={{
          position: "absolute",
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: isHovering ? "20px" : "32px", // Scale up on hover
          height: isHovering ? "20px" : "32px",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Cursor color
          borderRadius: "50%", // Circle shape
          pointerEvents: "none", // Ensure the cursor can still interact with elements
          transition: "transform 0.1s ease, width 0.2s, height 0.2s, box-shadow 0.2s", // Smooth transition for size and shadow
          transform: "translate(-50%, -50%)", // Center the cursor
          zIndex: 9999, // Ensure it stays on top of other content
        }}
      />
      {/* Animated ring */}
      {isHovering && (
        <div
          className="ring"
          key={animationKey} // Use animationKey to trigger a re-mount
          style={{
            position: "absolute",
            top: `${position.y}px`,
            left: `${position.x}px`,
            transform: "translate(-50%, -50%)", // Center the ring
            zIndex: 9998, // Just below the cursor
            pointerEvents: "none", // Prevent ring from blocking mouse events
          }}
        />
      )}
    </div>
  );
};

export default CustomCursor;
