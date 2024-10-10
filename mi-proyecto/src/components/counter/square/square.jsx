import { useState } from 'react';

const Square = () => {
    // Estado para manejar si el cuadrado es rojo o no
    const [color, setColor] = useState(true);

    // Función que cambia el color alternando entre true y false
    const toggleColor = () => {
        setColor(!color);
    }

    // Estilo condicional que cambia según el estado
    const squareStyle = {
        width: '200px',
        height: '200px',
        backgroundColor: color ? 'red' : 'green',
    };

    return (
        <div>
            <div style={squareStyle}></div>
            <button onClick={toggleColor}>Cambiar Color</button>
        </div>
    );
};



export default Square;
