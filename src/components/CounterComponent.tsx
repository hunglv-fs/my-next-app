"use client"
import React, { useRef, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../store/counterSlice';
import { RootState } from '../store/types';

interface CounterProps {
    title: string;
    counterId: 'cat' | 'dog' | 'goat';
}
const styleBox = {
    width: "300px",
    border: "1px solid #333",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    float: "left"
};

const CounterComponent: React.FC<CounterProps> = ({ title, counterId }) => {
    const count = useSelector((state: RootState) => state.counter.counters[counterId]);
    const dispatch = useDispatch();
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startHold = useCallback((action: () => void) => {
        action();
        intervalRef.current = setInterval(action, 100);
    }, []);

    const stopHold = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    return (
        <div style={styleBox}>
            <p>{title}: {count}</p>
            <button 
                onMouseDown={() => startHold(() => dispatch(increment(counterId)))}
                onMouseUp={stopHold}
                onMouseLeave={stopHold}
                type="button">Increment</button>
            <button 
                onMouseDown={() => startHold(() => dispatch(decrement(counterId)))}
                onMouseUp={stopHold}
                onMouseLeave={stopHold}
                type="button">Decrement</button>
            <button onClick={() => dispatch(reset(counterId))} type="button">Reset</button>
        </div>
    );
};

export default CounterComponent;