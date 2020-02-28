import React from 'react'
import Intro from './Intro'
import Beginning from './Beginning'
import Friends from './Friends'
import Story from './Story'
import Story1A from './Story1A'

function contentMap({userName, pathKey, callBack, userSelect, choiceWindow}) {
    let contentPath = ""

    switch(pathKey) {
        case "00": 
                contentPath = <Intro callBack={callBack}/>
                break;
        case "01":
                contentPath = <Beginning name={userName} />
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
        default: contentPath = <div>Something Went Wrong</div>
            

    }

    return contentPath
}



export default contentMap