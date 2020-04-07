import React from 'react'
import ChoiceContainer from '../../ChoiceContainer'
import { useState } from 'react'
import { useEffect } from 'react'
import User from '../../User'

export default function Story1A(props) {

    const [questionPrompt_1, setQuestionPrompt_1] = useState(null)
    const [mainChoiceContainer, setMainChoiceContainer] = useState(null)
    useEffect(() => {

        function setChoiceAreaDecision(event) {
            localStorage.setItem("1BChoice1", event.target.value)
            handleChoiceAreas(true)
        }
        function handleChoiceAreas(fromButton) {
            const choiceAreaDecision = localStorage.getItem("1BChoice1")
            switch (choiceAreaDecision) {
                case "A": 
                        if (fromButton === true) {
                            User.setStat("intoxication", +2)
                            User.setStat("playful", +1)
                            User.setAlignment("chaotic", +1)
                         }
                        setTimeout(()=>{setQuestionPrompt_1(choiceAreaDialogue_A())}, 100)
                        toggleMainChoiceContainer()
                        break;
                case "B": 
                        if (fromButton === true) {
                            User.setAlignment("lawful", +1)
                        }
                        setQuestionPrompt_1(choiceAreaDialogue_B)
                        toggleMainChoiceContainer()
                        break;
                default: setQuestionPrompt_1(choiceAreaQuestion_1)
            }
        }

        function choiceAreaDialogue_A() {
            return(
            <>
                <p className="choice-area-dialogue">
                You gladly extend your reach and claim your prize. You feel the cleansing properties of vodka at work.
                Your drunk level is {User.getStat("intoxication")} now.
                </p>
            </>
            )

        } 

        const choiceAreaDialogue_B = 
            <>
                <p className="choice-area-dialogue">You've selected something else
                </p>
            </>

        const choiceAreaQuestion_1 =
            <section className="choice-area-prompt">
                <button value="A" onClick={setChoiceAreaDecision}>Take a swig</button><button value="B" onClick={setChoiceAreaDecision}>Politely Decline</button>
            </section>

        function toggleMainChoiceContainer(){
            setTimeout(()=>{
                setMainChoiceContainer(
                    <ChoiceContainer 
                        content1={`Join ${User.getFriend(2)}`}
                        content2='Yar' value1='2A' value2='2B' 
                        userSelect={props.userSelect} 
                        choiceWindowClick={props.choiceWindowClick} />
            )}, 5000)
        }

        handleChoiceAreas()

    }, [props])

    return (
        <>
            <div className="game-story">
                <h2>Brunch Up Your Life</h2>
                <p>
                    "Let's do brunch." This decision seems so obvious that it was silly to even ponder other options.
            </p>
                <p>
                    "Good choice, {props.name}. Brunch sounds to die for," Richard responds with no hint of irony or foreshadowing, just simply saying
                the commonly used phrase.
            </p>
                <p>
                    To summarize your walk, it is decently productive--albiet, mostly uneventful: Sure, you help an elderly woman cross the street at some point. Yeah, you
                    fight the flames off of Richard's pants after he accidently walks through a burning bush (In his defense, he "thought he heard voices...").
                    Such dull affairs aren't worth expanding on when the real adventure,
                    like any and all adventures, begins only at-
            </p>
                <p>
                    "Ah, behold!"
            </p>
                <p>
                    Standing before you is a quaint, beige-brick building featuring long and colorful fencing; a roomy patio, forgetable neighboring residences, and a red-striped onning
                    with the words: <i>Brunch Up Your Life (Every Boy and Every Girl)</i>.
            </p>
                <p>
                    "Wow. It's... it's beautiful," you say in a breathy voice. Your appetite can't handle the welcoming aroma of fresh griddle treats, fresh orange juice,
                    and fresh gossip.
                </p>
                <p>
                    "Looks like we're about to do some waiting, {props.name}..."
                </p>
                <p>
                    Your mystified sights are disillusioned as you reevaluate the fencing--which, as it turns out, is actually a long and lively queue of afternoon famine.
                    You notice the average expression on each person is somewhere between 'God is good' and 'Why God, why'.
                </p>
                <p>
                    "Now how did I miss all that..." you wonder aloud.
                </p>
                <p>
                    "It's alright," Richard responds in a hopeful tone. "Let's hurry and get in line!" He gives you a suspicious... or maybe it's a playful look. "But first..."
                    Richard reaches into his pocket and gingerly lifts a shiny flask. Now smiling, he twists the cap off and offers you the first swig:
                </p>

                <hr></hr>
                {questionPrompt_1}

            </div>
            {mainChoiceContainer}
        </>
    )
}
