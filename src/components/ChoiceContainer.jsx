import React from 'react'
import Button from './Button'
import arrow from './contents/docs/images/up-arrow-icon.png'

export default function ChoiceContainer(props) {
    return (
        <section className="choice-container">
            <div className="choice-arrow-container" onClick={props.choiceWindowClick}>
                <img src={arrow} alt="Arrow" className="choice-arrow"></img>
            </div>
            <div className="button-container hidden">
                <Button value={props.value1} content={props.content1} wait={1000} userSelect={props.userSelect}/>
                <Button value={props.value2} content={props.content2} wait={1000} userSelect={props.userSelect}/>
            </div>
        </section>
    )
}

