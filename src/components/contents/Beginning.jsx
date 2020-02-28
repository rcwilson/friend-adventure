import React from 'react'

export default function Beginning(props) {

    return (
        <>
            <h2>
                Are you ready for an adventure, {props.name}?
            </h2>
            <button value='02' className='choice-button'>I'm ready</button>
            <button value='00' className='choice-button'>No, my name isn't {props.name}</button>
        </>
    )
}
