import { useEffect, useState } from "react";
import './styles.css';

const RandomColorGenerator = () => {
    const [colorType, setColorType] = useState('rgb');
    const [color, setColor] = useState('');

    function generateRandomNumber(length) {
        return Math.floor(Math.random() * length);
    }

    function handleChooseRandomColor() {
        colorType === 'hex' ? handleCreateHex() : handleCreateRgb();
    }

    function handleCreateHex() {
        setColorType('hex');
        const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hexArray[generateRandomNumber(hexArray.length)];
        }
        setColor(hexColor);
    }

    function handleCreateRgb() {
        setColorType('rgb');
        const r = generateRandomNumber(256);
        const g = generateRandomNumber(256);
        const b = generateRandomNumber(256);
        console.log(`rgb(${r}, ${g}, ${b})`);
        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    function handleDisplayColorLabel() {
        return `${color && colorType + ':'} ${color}`
    }

    console.log(color);

    return (
        <div className='color-generator-container' style={{ backgroundColor: color }}>
            <div className='button-container'>
                <button onClick={handleCreateHex}>Create Hex Color</button>
                <button onClick={handleCreateRgb}>Create RGB Color</button>
                <button onClick={handleChooseRandomColor}>Choose Random Color</button>
            </div>
            <div className='color-label-container'>
                <h1>{handleDisplayColorLabel()}</h1>
            </div>
        </div>
    )
}

export default RandomColorGenerator;