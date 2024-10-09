// components/ThreeDImage.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ThreeDImage.module.css';

interface ThreeDImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const ThreeDImage: React.FC<ThreeDImageProps> = ({ src, alt, width = 300, height = 300 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.threeDContainer} ${isHovered ? styles.hovered : ''}`}
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles.threeDImage}
        placeholder="empty"
        quality={100}
        style={{ borderRadius: '10px' }}
      />
    </div>
  );
};

export default ThreeDImage;
