import React from 'react'
import ChoiceContainer from '../../ChoiceContainer'

export default function Story1A(props) {

    return (
        <>
            <h2>Brunch Title</h2>
            <div className="game-story">
                <p>
                    "Let's do brunch." Brunch seems like such an obvious choice that it was silly to even think about it.
            </p>
                <p>
                    "Good choice, {props.name}. Brunch sounds to die for," Richard responds with no hint of irony or foreshadowing, just simply saying
                the commonly used phrase.
            </p>
                <p>
                    To summarize your walk, it is decently productive--albiet, mostly uneventful. Sure, you help an elderly woman cross the street at some point. Yeah, you
                    fight the flames off of Richard's pants after he accidently walks through a burning bush (In his defense, he "thought he heard voices...").
                    Such dull affairs aren't worth expanding on when the real adventure,
                    of any and all adventures, begins only at-
            </p>
                <p>
                    "Ah, behold!"
            </p>
                <p>
                    Standing before you is a quaint, beige-brick building featuring long and colorful fencing, a roomy patio, forgetable neighboring residences, and a red-striped onning
                    with the words: Brunch Up Your Life (Every Boy and Every Girl).
            </p>
                <p>
                    "Wow. It's... it's beautiful," you say in a breathy voice. Your appetite can't handle the welcoming aroma of griddle treats, fresh orange juice,
                    and recent gossip.
                </p>
                <p>
                    "Looks like we're about to do some waiting, {props.name}..."
                </p>
                <p>
                    Your mystified sights are disillusioned as you reevaluate the fencing which, as it turns out, is actually a long and lively queue of afternoon famine.

                </p>
            </div>
            <ChoiceContainer content1='Nada' content2='Yar' value1='2A' value2='2B' userSelect={props.userSelect} choiceWindowClick={props.choiceWindowClick} />
        </>
    )
}
