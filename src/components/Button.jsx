import React from 'react'
import { useEffect, useState } from 'react'

export default function Button(props) {

    const [buttonContent, setButtonContent] = useState()

    useEffect(() => {
        const timer = setTimeout(() => 
            setButtonContent(
                <button 
                     onClick={props.userSelect} value={props.value} className='choice-button'>
                        {props.content}
                </button>),
            props.wait)
        return () => clearTimeout(timer)
    }, [props]) 
        
    

    return (<>{buttonContent}</>)
}
