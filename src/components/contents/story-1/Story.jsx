import React from 'react'
import Season from '../../Season'
import  ChoiceContainer from '../../ChoiceContainer'

export default function Story(props) {

    // const userFriendsArray = JSON.parse(localStorage.getItem("userFriends"))
    
    return (
        <>
        <h2>Just a Stroll</h2>
        <div className="game-story">
            <p>
                "Hey, {props.name}!"
            </p>
            {Season.getDescription1()}
            <p>
                You turn toward the familiar greeting.
                Your delighted friend and his trademark wave meet your eyes.</p>
            <p>
                "Oh hello, Richard!" you respond in pleasant surprise. You didn't expect
                any friend encounters on your stroll--especially on the side streets in the afternoon.
            </p>
            <p>
                "Where are you off to?" Richard asks. You can tell he equally appreciates surprise friend encounters.
            </p>
            {Season.getDescription2()}
            <p>
                "Sounds good. We should join forces!"
            </p>
            <p>
                You find that to be a WONDERFUL idea. "Where shall we go?" you ask Richard, forgetting about his troubles
                with decision-making.
            </p>
            <p>
                "Umm..." Richard begins to struggle. "I was thinking... uhh.. maybe coffee? or Brunch somewhere?"
                He doesn't appear to have any promise on deciding. Looks like this one is up to you:
            </p>
        </div>

        <ChoiceContainer content1={`"Let's get coffee."`} content2={`"Let's do brunch."`} value1='1A' value2='1B' userSelect={props.userSelect} choiceWindowClick={props.choiceWindowClick} />
        
        </>
    )
}
