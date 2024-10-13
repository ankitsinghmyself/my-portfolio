// GlowButton.tsx
import React from 'react';
import styles from './GlowButton.module.css';

interface GlowButtonProps {
    onClick: () => void; // Type for the onClick handler
    children: React.ReactNode; // Type for children (button text)
}

const GlowButton: React.FC<GlowButtonProps> = ({ onClick, children }) => {
    return (
        <button className={styles.glowOnHover} type="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default GlowButton;
