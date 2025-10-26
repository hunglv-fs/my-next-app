"use client"
import React, {useState, useEffect} from "react";
import { useCounter } from "../hooks/useCounter";

interface CounterProps {
    title: string;
    initial?: number;
}
const styleBox = {
    width: "300px",
    border: "1px solid #333",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    float: "left"
};

const CounterComponent: React.FC<CounterProps> = ({ title, initial }) => {
    const { count, increment, decrement, reset } = useCounter(initial);
    const [memoryCount, setMemoryCount] = useState<number[] | []>([]);

    // watch $title change
    useEffect(() => {
        console.log("CounterComponent mounted with title:", title);
    }, [title]);

    // watch $initial change
    useEffect(() => {
        console.log("Initial value changed to:", initial);
    }, [initial, reset]);

    // watch $count change
    useEffect(() => {
        if(count === 5) {
            console.log("Count đã đạt đến 5!");
        }
    }, [count]); 
    
    // run every render
    useEffect(() => {
        console.log("Component đã được render");
    });

    // mount component when visit page, show component, ...
    useEffect(() => {
        console.log("Component đã được mount");
    }, []);

    // unmount component when leave page, hide component, ...
    useEffect(() => {
        return () => {
            console.log("Component sẽ UUUUUNNNNnmount");
        };
    }, []);

    // watch $memoryCount change
    useEffect(() => {
        console.log("memoryCount thay đổi:", memoryCount);
    }, [memoryCount]);


    const handleSaveToMemory = () => {
        setMemoryCount([...memoryCount, count]);
    };
    const handleClearMemory = () => {
        setMemoryCount([]);
    };  


    return (
        <div style={styleBox}>
            <p>{title}: {count}</p>
            <button className="" onClick={increment} type="button">Increment</button>
            <button onClick={decrement} type="button">Decrement</button>
            <button onClick={reset} type="button">Reset</button>
            <button onClick={ handleSaveToMemory } type="button">Lưu vào bộ nhớ</button>
            <div>
                <h3>Bộ nhớ:</h3>
                <ul>
                    {memoryCount.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <button onClick={handleClearMemory} type="button">Xóa bộ nhớ</button>
        </div>
    );
};

export default CounterComponent;