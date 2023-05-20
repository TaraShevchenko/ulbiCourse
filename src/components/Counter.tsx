import React, {useState} from "react";
import './style.scss'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="counter-wrapper">
            <h1>{count}</h1>
            <button onClick={() => setCount((prevState) => prevState + 1)}>Increment</button>
            <button onClick={() => setCount((prevState) => prevState - 1)}>Decrement</button>
        </div>
    );
};

export default Counter;