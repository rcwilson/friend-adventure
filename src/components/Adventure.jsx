import React, {useState, useEffect} from 'react'
import './Adventure.css'
import contentMap from './contents/contentMap'
import User from './User'

// Start new Every Time
localStorage.clear()

export default function Adventure() {
    
    const [userName, setUserName] = useState(User.getName())
    useEffect(() => {
        function changeTitle() {
            document.title = userName ? `${userName}'s Adventure` : `Friend Adventure`
            }
        function saveUserName() {
            User.setName(userName)
            }
        changeTitle() 
        saveUserName()
    }, [userName])
    
    const [currentContent, setCurrentContent] = useState('')
    useEffect(() => {
        function addOnClickToButtons () {
            const choiceButtons = document.querySelectorAll('.choice-button')
            choiceButtons.forEach(button => {
                button.addEventListener('click', handleUserSelect, false)
            })
        }
        function addGameContentAnimation () {
            const gameContent = document.querySelector('.game-story')
            if(gameContent != null) {gameContent.classList.add('game-load')}
        }
        addGameContentAnimation()
        addOnClickToButtons()
        return () => {
            const choiceButtons = document.querySelectorAll('.choice-button')
            const gameContent = document.querySelector('.game-story')
            choiceButtons.forEach(button => {
                button.removeEventListener('click', handleUserSelect)
            })
            if(gameContent != null) {gameContent.classList.remove('game-load')}
        }
    }, [currentContent])

    const [contentKey, setContentKey] = useState(User.getPath)
    useEffect(() => {
        function handleStartingPath() {
            setCurrentContent(contentMap({pathKey: contentKey, userName: userName, callBack: handleUserNameSubmit, userSelect: handleUserSelect, choiceWindow: handleChoiceWindowClick}))    
        }  
        handleStartingPath()
        User.setPath(contentKey)
    }, [contentKey, userName])
    
    return (
        <div className="wrapper"> 
            <section className="game-content">
            {currentContent}
            </section>
        <footer></footer>
        </div>
        )  
     
    function handleUserNameSubmit (event) {
        event.preventDefault()
        const newUserName = event.target.elements.inputname.value
        function contentUpdate() {
            setContentKey('01')
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
    
    function handleChoiceWindowClick (event) {
        event.target.parentNode.classList.toggle("show")
        event.target.parentNode.classList.toggle("hidden")
        document.getSelection().removeAllRanges()
    }


}