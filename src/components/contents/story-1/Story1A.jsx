import React from 'react'
import ChoiceContainer from '../../ChoiceContainer'

export default function Story1A(props) {
    
    return (
        <>
        <div className="game-story">
        <h2>A Case for Coffee</h2>
            <p>
                "Let's get coffee," you say with complete confidence. Richard's face switches to relief.
            </p>
            <p>
                "An Iced Americano would be perfect right now." With new-found direction in todays plan, he sets the march
                towards destination caffeination.
            </p>
            <p>
                On your walk, you discuss some easy topics like Climate Change, the current political climate, and political climax.
                Just as you are about to clarify what that last topic was, three different colored squirrels dash against your path, scurrying
                down a crossing alley. Thoughts on the absurdity of one black, one grey, and one white squirrel together is put on hold due the Richard-shaped
                figure now darting in their direction.
            </p>
            <p>
                "What are you doing, Richard?" Fortunely your voice carries
            </p>

        </div>
            <ChoiceContainer content1='Nada' content2='Yar' value1='2A' value2='2B' userSelect={props.userSelect} choiceWindowClick={props.choiceWindowClick} />
        </>
    )
}
