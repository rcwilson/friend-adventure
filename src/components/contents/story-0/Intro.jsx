import React, {useState, useRef} from 'react'
import './Intro.css'



export default function Intro(props) {
    
    const [title, setTitle] = useState("What is your name, friend?")
    
    const nameRef = useRef()

    function handleTextOnly(event){
        const chCode = event.charCode ? event.charCode : event.keyCode 
        
        return null
    }
    return (
    <>
    <h2 className="title">{title}</h2>
    <form onSubmit={props.callBack}>
        <input required title="Type your name"type="text" id="inputname" 
            ref={nameRef} maxLength="12" 
            onChange={() => setTitle(`Hello, ${nameRef.current.value}`)}
            onKeyPress={handleTextOnly}
            >
        </input>
        <button type="submit">Submit</button>
    </form>
    </>
    
    )
}