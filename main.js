const contentBox = document.querySelector('main')
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


// animações

const shaker = [
    
        { transform: 'translate(1px, 1px) rotate(0deg)' },
        { transform: 'translate(-1px, -2px) rotate(-1deg)'},
        { transform: 'translate(-3px, 0px) rotate(1deg)' },
        { transform: 'translate(3px, 2px) rotate(0deg)' },
        { transform: 'translate(1px, -1px) rotate(1deg)'},
        { transform: 'translate(-1px, 2px) rotate(-1deg)' },
        { transform: 'translate(-3px, 1px) rotate(0deg)' },
        { transform: 'translate(3px, 1px) rotate(-1deg)'},
        { transform: 'translate(-1px, -1px) rotate(1deg)'},
        { transform: 'translate(1px, 2px) rotate(0deg)'},
        { transform: 'translate(1px, -2px) rotate(-1deg)'}
      ];
  
  const shakerTiming = {
    duration: 200,
    iterations: 3,
  }

//eventos

btnTry.addEventListener('click', handleTryClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen2.classList.contains('hide')){
        handleTryClick()
    } else if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
        }
    }
)


btnReset.addEventListener('click', handleResetClick)


// funções
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    
    if(Number(inputNumber.value) == randomNumber){
        toggleScreen()
        screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas`
    } 
    
    contentBox.animate(shaker, shakerTiming)
    inputNumber.value = ""
    xAttempts++

}


function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}


function toggleScreen() {
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide")
}
