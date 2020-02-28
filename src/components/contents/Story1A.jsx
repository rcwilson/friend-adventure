import React from 'react'
import ChoiceContainer from '../ChoiceContainer'

export default function Story1A(props) {
    
    return (
        <>
        <h2>A Case for Coffee</h2>
        <div className="game-story">
            <p>
                "Let's get coffee," you say with complete confidence. Richard's face switches to relief.
            </p>
            <p>
                "An Iced Americano would be perfect right now." With new-found direction in todays plan, he sets the march
                towards destination caffeination.
            </p>
            <p>
                On your walk you discuss some easy topics like Climate Change, the current political climate, and political climax.
                Just as you are about to clarify what that last topic was, three bouncey squirrels dash against your path, scurrying
                down a crossing alley. 
            </p>
        </div>
            <ChoiceContainer content1='Nada' content2='Yar' value1='2A' value2='2B' userSelect={props.userSelect} choiceWindowClick={props.choiceWindowClick} />
        </>
    )
}
