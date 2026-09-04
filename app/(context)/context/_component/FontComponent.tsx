"use client"
import { useContext, useState } from "react";
import { FontSizeContext, FontSizeContextType } from "./FontProvider";

export default function FontComponent() {
    const {state, actions} = useContext<FontSizeContextType>(FontSizeContext)
    const {fontSize} = state
    const {setFontSize} = actions

    const [value, setValue] = useState<string>("")
    // e타입 객체는 React가 가지고 있음
    // React.0000Event<HTML0000Element> 등등..
    const handleVlaueChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const handleVlaueKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            setFontSize(value)
        }
    }

    return (
        <div>
            <p style={{fontSize}}>😂</p>
            <input className="border-2 border-solid border-black" type="text" onChange={handleVlaueChange} onKeyDown={handleVlaueKeyDown}/>
            <button onClick={() => setFontSize("100px")}>폰트사이즈 변경!</button>
        </div>
    );
}