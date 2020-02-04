import React from 'react'
import Intro from './Intro'
import Beginning from './Beginning'
import Friends from './Friends'

function contentMap({userName, pathKey, callBack}) {
    let contentPath = ""

    switch(pathKey) {
        case "0": 
                contentPath = <Intro callBack={callBack}/>
                break;
        case "1":
                contentPath = <Beginning name={userName} />
                break;
        case "2":
                contentPath = <Friends />
                break;
        default: contentPath = <div>Something Went Wrong</div>
            

    }

    return contentPath
}



export default contentMap