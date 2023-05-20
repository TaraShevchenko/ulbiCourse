import React, {useState} from "react";
import cn from './style.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className={cn.counter_wrapper}>
            <h1 className={cn.h1}>{count}</h1>
            <button className={cn.button} onClick={() => setCount((prevState) => prevState + 1)}>Increment</button>
            <button className={cn.button} onClick={() => setCount((prevState) => prevState - 1)}>Decrement</button>
        </div>
    );
};

export default Counter;