import React, { useState } from 'react';

const JulienCodeComp = ({ couleur }) => {
    const [color, setColor] = useState(couleur);

    const changeColor = () => {
        const newColor = color === 'red' ? 'blue' : 'red';
        setColor(newColor);
    };

    const getRandomColor = () => {
        // Génère une couleur hexadécimale aléatoire
        const letters = '0123456789ABCDEF';
        let randomColor = '#';
        for (let i = 0; i < 6; i++) {
            randomColor += letters[Math.floor(Math.random() * 16)];
        }
        return randomColor;
    };

    const handleMouseOver = () => {
        const randomColor = getRandomColor();
        setColor(randomColor);
    };

    return (
        <div>
            <div style={{ color }} onMouseOver={handleMouseOver}>
                Je suis un composant
            </div>
            <button onClick={changeColor}>Changer la couleur</button>
        </div>
    );
};

export default JulienCodeComp;