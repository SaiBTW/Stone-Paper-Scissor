const cpuChoiceEl = document.querySelector(".cchoice")
const myChoiceEl = document.querySelector(".mchoice")
const rockEl = document.querySelector(".btn#rock")
const paperEl = document.querySelector(".btn#paper")
const scissorEl = document.querySelector(".btn#scissor")
const resetEl = document.querySelector(".btn#reset")
const resultEl = document.querySelector(".result")

const availableOptions = ["Stone","Paper","Scissor"]

// const cpuChoice = availableOptions[randomChoice()]

function randomChoice(){
    let cpuoption = Math.floor(Math.random()*availableOptions.length)
    return availableOptions[cpuoption]
}

function decider(){
    
}

rockEl.addEventListener("click",()=>{
    myChoiceEl.innerHTML = `Stone`
     let cpuChoice = randomChoice()
     cpuChoiceEl.innerHTML = cpuChoice

     if (cpuChoice === "Stone"){
        let resultOuput = `You Won !!!`
        resultEl.innerHTML = resultOuput
        resultEl.style.color = "Green"
     }
     else{
        resultEl.innerHTML = `You Lost !!!`
        resultEl.style.color = "Red"
     }

     
})
paperEl.addEventListener("click",()=>{
    myChoiceEl.innerHTML = `Paper`
    let cpuChoice = randomChoice()
    cpuChoiceEl.innerHTML = cpuChoice

     if (cpuChoice === "Paper"){
        let resultOuput = `You Won !!!`
        resultEl.innerHTML = resultOuput
        resultEl.style.color = "Green"
     }
     else{
        resultEl.innerHTML = `You Lost !!!`
        resultEl.style.color = "Red"
     }
})
scissorEl.addEventListener("click",()=>{
    myChoiceEl.innerHTML = `Scissor`
    let cpuChoice = randomChoice()
    cpuChoiceEl.innerHTML = cpuChoice

    if (cpuChoice === "Scissor"){
        let resultOuput = `You Won !!!`
        resultEl.innerHTML = resultOuput
        resultEl.style.color = "Green"
     }
     else{
        resultEl.innerHTML = `You Lost !!!`
        resultEl.style.color = "Red"
     }
})

resetEl.addEventListener("click",()=>{
    myChoiceEl.innerHTML = ``
    resultEl.innerHTML = `Choose a Option to play`
    cpuChoiceEl.innerHTML = ``
    resultEl.style.color = "Black"
})

// cpuChoiceEl.innerHTML = cpuChoice;