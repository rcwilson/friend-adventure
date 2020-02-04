import React, {useState, useRef} from 'react'
import './Intro.css'



export default function Intro(props) {
    
    const [title, setTitle] = useState("What is your name, friend?")
    
    const nameRef = useRef()

    return (
    <>
    <h2 className="title">{title}</h2>
    
    <form onSubmit={props.callBack}>
        <input required id="inputname" ref={nameRef} onChange={() => setTitle(`Hello, ${nameRef.current.value}`)}>
        </input>
        <button type="submit">Submit</button>
    </form>
    </>
    
    )
}