"use client"
import useCountStore from "@/app/stores/useCountStore";

export default function ZustandCounter() {
    const {count, increase, decrease} = useCountStore()
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    );
}