import React from 'react'
import Intro from './story-0/Intro'
import Intro2 from './story-0/Intro2'
import Friends from './story-0/Friends'
import Story from './story-1/Story'
import Story1A from './story-1/Story1A'
import Story1B from './story-1/Story1B'

function contentMap({userName, pathKey, callBack, userSelect, choiceWindow}) {
    let contentPath = ""

    switch(pathKey) {
        case "00": 
                contentPath = <Intro callBack={callBack}/>
                break;
        case "01":
                contentPath = <Intro2 name={userName} />
                break;
        case "02":
                contentPath = <Friends />
                break;
        case "03":
                contentPath = <Story name={userName} callBack={callBack}  userSelect={userSelect} choiceWindowClick={choiceWindow}/>
                break;
        case "1A":
                contentPath = <Story1A callBack={callBack}  userSelect={userSelect} choiceWindowClick={choiceWindow}/>
                break;
        case "1B":
                contentPath = <Story1B name={userName} callBack={callBack}  userSelect={userSelect} choiceWindowClick={choiceWindow}/>
                break;
        default: contentPath = <div>Something Went Wrong</div>
            

    }

    return contentPath
}



export default contentMap