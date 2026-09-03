"use client"

// colocation 디자인 패턴
// Custom Hooks 디자인 패턴
import { useState } from "react";
export default function Counter() {

    const [number, setNumber] = useState(0)
    const increase = () => setNumber(number+1)
    const decrease = () => setNumber(number-1)

    return (
        <div>
            <button onClick={decrease}>-1 감소</button>
            <h1>{number}</h1>
            <button onClick={increase}>+1 증가</button>
        </div>
    );
}