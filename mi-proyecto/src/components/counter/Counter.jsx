import {useState} from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);


    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => decrement(value, setValue)}>-1</button>
            <button onClick={() => reset(value, setValue)}>Reset</button>
            <button onClick={() => increment(value, setValue)}>+1</button>
        
        </div>
    );
};

const increment = ({value, setValue}) => {
    setValue(value + 1);
};

const decrement = ({value, setValue}) => {
    setValue(value - 1);
};

const reset = ({setValue}) => {
    setValue(0);
};

export default Counter;