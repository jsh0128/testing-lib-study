import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setcount] = useState(0);
    const incrementCount = () => {
        setcount(count + 1);
    };
    const decrementCount = () => {
        if (count > 0) {
            setcount(count - 1);
        }
    };
    return (
        <div data-test="component-app">
            <h1 data-test="counter-display">
                The counter is currently&nbsp;
                <span data-test="count">{count}</span>
            </h1>
            <button data-test="increment-button" onClick={incrementCount}>
                Increment button
            </button>
            <button data-test="decrement-button" onClick={decrementCount}>
                Decrement button
            </button>
        </div>
    );
}

export default App;
