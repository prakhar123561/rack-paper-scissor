let userScore = 0
let compScore = 0

const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')
const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')

const drawGame = () => {
    const compChoice = genCompChoice()
    msg.innerHTML=`Game is draw! play again Both choice ${compChoice} are same`
    msg.style.backgroundColor = '#fb8500'
}

const genCompChoice = () =>{
    const options = ['stone','paper','scissor']
    const randomIndx = Math.floor(Math.random()*3)
    return options[randomIndx]
} 

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++
        userScorePara.innerText = userScore
        if(userScore == 10){
            Swal.fire({
                title: "<strong>You are winner👑</strong>",
                icon: "success",
                timer: 1500,
                html: ``,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: `
                  <i class="fa fa-thumbs-up"></i> Great!
                `,
                confirmButtonAriaLabel: "Thumbs up, great!",
                cancelButtonText: `
                  <i class="fa fa-thumbs-down"></i>
                `,
                cancelButtonAriaLabel: "Thumbs down"
              });
        }
        msg.innerHTML=`You win! your choice ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = 'green'
    }
    else{
    compScore++
    compScorePara.innerText = compScore
    if(compScore == 10){
        Swal.fire({
            title: "<strong>Computer is winner👑</strong>",
            icon: "success",
            timer: 1500,
            html: ``,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `
              <i class="fa fa-thumbs-up"></i> Great!
            `,
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonText: `
            <i class="fa-solid fa-thumbs-down"></i>
            `,
            cancelButtonAriaLabel: "Thumbs down"
          });
    }
    msg.innerHTML=`You lose! computer choice ${compChoice} beats ${userChoice} `
    msg.style.backgroundColor = 'red'
    } 
}

const playGame = (userChoice) => {
    
    const compChoice = genCompChoice()
    
    if(userChoice === compChoice){
        drawGame()
    }
    else{
        var userWin = true
        if(userChoice === 'stone'){
           //paper, scissor
           userWin = compChoice === 'paper' ? false : true
           userWin = compChoice === 'scissor' ? true : false
        }
        else if(userChoice === 'paper'){
            //stone, scissor
            userWin = compChoice === 'scissor' ? false : true
            userWin = compChoice === 'stone' ? true : false
        }
        else{
            //stone, paper
            userWin = compChoice === 'stone' ? false : true
            userWin = compChoice === 'paper' ? true : false
        }  
        showWinner(userWin,userChoice,compChoice)  
    }
}

choices.forEach((choice)=>{    
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id')
        playGame(userChoice)
    })
})

