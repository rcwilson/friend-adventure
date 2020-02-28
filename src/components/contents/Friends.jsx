import React, {useRef, useEffect} from 'react'
import './Friends.css'

export default function Friends() {
    // const [warning, setWarning] = useState('')

    useEffect(() => {
        function addContinueListener() {
            document.querySelector('.continue').addEventListener('click', handleContinueButton)
        }
        addContinueListener()
        return () => {
            document.querySelector('.continue').removeEventListener('click', handleContinueButton)
        };
    }, [])
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    
    function handleContinueButton(event) {
        event.preventDefault()
        const friendArray = [ref1.current.value, ref2.current.value, ref3.current.value]
        localStorage.setItem("userFriends", JSON.stringify(friendArray))
    }
    function handleInputCheck(event) {
        const x = event.target.value.toLowerCase()
        if(x.includes("dick") || x.includes("rich")) {
            event.target.parentNode.classList.add("warning")
            event.target.classList.add("warning")
            document.querySelector(".continue").classList.remove("show")
        } else {
            event.target.parentNode.classList.remove("warning")
            event.target.classList.remove("warning")
            
            if(ref1.current.value !== "" && ref2.current.value !== ""  && ref3.current.value !== "" && checkForRichardWarnings()) {
                document.querySelector(".continue").classList.add("show")
            } else {
                document.querySelector(".continue").classList.remove("show")

            }
        }
    }
    function checkForRichardWarnings() {
        const x = document.querySelectorAll(".warning")
        if(x.length > 0) {
            return false
        }
        else {
            return true
        }
    }

    return (
        <>
            <h2 className="title">Three friends you'll see in your adventure:</h2>
            
            <form>
            <div>
                <input required ref={ref1} onChange={handleInputCheck}></input>
            </div>
            <div>
                <input required ref={ref2} onChange={handleInputCheck}></input>
            </div>
            <div>
                <input required ref={ref3} onChange={handleInputCheck}></input>
            </div>
            <button type="button" value="03" className="choice-button continue">Continue</button>
            </form>
        </>
    )
}
