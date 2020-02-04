import React, {useState, useEffect} from 'react'
import './Adventure.css'
import contentMap from './contents/contentMap'

// localStorage.clear()

let USER_PATH = localStorage.getItem('userPath') || "0"
let LOCAL_USER = localStorage.getItem('userName')
// let LOCAL_USER_TEST = null
let USER_PATH_TEST = "2"

export default function Adventure() {
    
    const [userName, setUserName] = useState(LOCAL_USER)
    useEffect(() => {
        function changeTitle() {
            document.title = userName ? `${userName}'s Adventure` : `Friend Adventure`
            }
        function setNameToLocalStorage() {
            localStorage.setItem('userName', userName)
            }
        changeTitle() 
        setNameToLocalStorage()
    }, [userName])
    
    const [currentContent, setCurrentContent] = useState('')
    useEffect(() => {
        function addOnClickToButtons () {
            const choiceButtons = document.querySelectorAll('.choice-button')
            choiceButtons.forEach(button => {
                button.addEventListener('click', handleUserSelect, false)
            })
        }
        addOnClickToButtons()
        return () => {
            const choiceButtons = document.querySelectorAll('.choice-button')
            choiceButtons.forEach(button => {
                button.removeEventListener('click', handleUserSelect)
            })
        }
    }, [currentContent])

    const [contentKey, setContentKey] = useState(USER_PATH)
    useEffect(() => {
        function handleStartingPath() {
            setCurrentContent(contentMap({pathKey: contentKey, userName: userName, callBack: handleUserNameSubmit}))    
        }  
        function setPathToLocalStorage() {
            localStorage.setItem('userPath', contentKey)
        } 
        handleStartingPath()
        setPathToLocalStorage()
    }, [contentKey])
    


    return (
        <div className="wrapper"> 
            <section className="game-content">
            {currentContent}
            </section>
        <footer className="footer"></footer>
        </div>
        )  
        


    function handleUserNameSubmit (event) {
        event.preventDefault()
        const newUserName = event.target.elements.inputname.value
        function contentUpdate() {
            setContentKey('1')
            setUserName(newUserName)
        }
        contentUpdate()
    }

    function handleUserSelect (event) {
        
        const nextContentPath = event.target.value
        
        function contentUpdate() {
            setContentKey(nextContentPath)
        }
        contentUpdate()
    }
    
}