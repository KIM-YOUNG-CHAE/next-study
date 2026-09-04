"use client"
import { createContext, useState } from "react";

export interface FontSizeContextType{
    state:{
        fontSize:string
    },
    actions:{
        setFontSize:React.Dispatch<React.SetStateAction<string>>
    }
}

export const FontSizeContext = createContext<FontSizeContextType>({
    state: {fontSize:""},
    actions: {setFontSize: () => {}}
})

const FontSizeProvider = ({children}:{children:React.ReactNode}) => {
    const [fontSize, setFontSize] = useState<string>("2rem")
    const value = {
        state:{fontSize},
        actions:{setFontSize}
    }

    return(
        <FontSizeContext.Provider value={value}>
            {children}
        </FontSizeContext.Provider>
    )
}

export default FontSizeProvider