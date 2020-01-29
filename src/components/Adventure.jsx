import React, {useState, useEffect, useRef} from 'react'
import './Adventure.css'
import contentMap from './contents/contentMap'

// localStorage.clear()
// localStorage.setItem("userPath", '0')

let USER_PATH = localStorage.getItem('userPath') || "0"
let LOCAL_USER = localStorage.getItem('userName')
// let LOCAL_USER_TEST = null
// let USER_PATH_TEST = "0"

export default function Adventure() {
    
    const [userName, setUserName] = useState(LOCAL_USER)
    useEffect(() => {
        
        function changeTitle() {
            document.title = userName ? `${userName}'s Adventure` : `Friend Adventure`
        }
        changeTitle() 
    }, [userName])
    
    console.log(LOCAL_USER, USER_PATH)
    
    const [currentContent, setCurrentContent] = useState('')
    const [contentKey, setContentKey] = useState(USER_PATH)
    useEffect(() => {
        function handleStartingPath() {
            if (userName === null) {
                
                setCurrentContent(contentMap({pathKey: contentKey, callBack: handleUserSubmission}))
            } else {
                
                setCurrentContent(contentMap({pathKey: contentKey, userName: userName, callBack: handleUserSubmission}))
            }
        }   
        handleStartingPath()
    }, [contentKey])
    
    return (
        <div className="wrapper"> 
            {currentContent}
            <section className="input"></section>
        </div>
        )  
        
    function handleUserSubmission (event) {
        event.preventDefault()
        
        const newUserName = event.target.elements.inputname.value
        localStorage.setItem('userPath', '1')
        localStorage.setItem('userName', newUserName)
        
        
        function contentUpdate() {
            setContentKey('1')
            setUserName(newUserName)
        }
         
        contentUpdate()
    }
    
}