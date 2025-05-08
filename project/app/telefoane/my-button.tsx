"use client"

import { useState } from "react";

export default function MyButton () { 
    const [ text, setText ] = useState<string>("Test"); 

    const handleSchimbare = () => { 
        let newText: string = "Test2"; 
        setText(newText);
    }

    return ( 
        <div>
            <button onClick = { handleSchimbare }> Apasa </button>
            <div> { text } </div>
            <p> </p>
        </div>
    )
}