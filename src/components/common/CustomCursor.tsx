import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [boxShadowColor, setBoxShadowColor] = useState("rgba(255, 255, 255, 0.4)"); // Default shadow color

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

      // Set the box shadow color when hovering
      setBoxShadowColor(isInteractive ? "rgba(0, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.4)");
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
          pointerEvents: "none",
          transition: "transform 0.1s ease, width 0.2s, height 0.2s, box-shadow 0.2s", // Smooth transition for size and shadow
          transform: "translate(-50%, -50%)", // Center the cursor
          boxShadow: isHovering
            ? `0 0 50px ${boxShadowColor}, 0 0 100px ${boxShadowColor}` // More intense glow effect on hover
            : `0 0 10px ${boxShadowColor}, 0 0 20px ${boxShadowColor}`, // Subtle glow effect when not hovering
          zIndex: 9999, // Ensure it stays on top of other content
        }}
      />
    </div>
  );
};

export default CustomCursor;
