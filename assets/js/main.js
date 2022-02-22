import { getAdvice } from './api.js'
const adviceDisplay = document.querySelector('.advice__content p')
const adviceIdDisplay = document.querySelector("#advice_id")
const adviceBtn = document.getElementById("new_advice_btn")

newAdvice()

adviceBtn.addEventListener("click", newAdvice)


function setContent({advice, id}) {

    setOpacity([adviceDisplay, adviceIdDisplay], 0)

    adviceDisplay.addEventListener("transitionend", () => {
        adviceDisplay.textContent = advice
        setOpacity([adviceDisplay], 1)
    })

    adviceIdDisplay.addEventListener("transitionend", () => {
        adviceIdDisplay.textContent = `#${id}`
        setOpacity([adviceIdDisplay], 1)
    })
    
}

function setOpacity(arr, value) {
    arr.forEach(element => {
        element.style.opacity = value
    })
}

async function newAdvice() {
    try {
        const advice = await getAdvice()
        setContent(advice)
    }
    catch(err) {
        console.error(err)
    }
}