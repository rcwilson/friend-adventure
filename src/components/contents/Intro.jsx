import React, {useState, useRef} from 'react'
import Beginning from './Beginning'



export default function Intro(props) {
    
    const [content, setContent] = useState("What is your name, friend?")
    
    const nameRef = useRef()

    return (
    <>
    <section className="content">{content}</section>
    
    <form onSubmit={props.callBack}>
        <input required id="inputname" ref={nameRef} onChange={() => setContent(`Hello, ${nameRef.current.value}`)}>
        </input>
        <button type="submit">Submit</button>
    </form>
    </>
    
    )
}