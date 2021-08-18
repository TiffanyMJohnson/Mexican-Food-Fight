class Player {
    constructor () {
        this.health = 100
        this.currentChoice = null
    }
}

const player1 = {

    burrito: new Player (),

    attack () {
        const attackButton = document.querySelector("#attackburrito")
        attackButton.addEventListener ("click", (event) => {
            this.burrito.currentChoice = "attack"
            const attackBurritoImg = document.getElementById ("originalburrito")
            attackBurritoImg.src =  "https://i.imgur.com/UOco2wd.png"
        })
    },
    defend () {
        const defendButton = document.querySelector("#defendburrito")
        defendButton.addEventListener ("click", (event) => {
            this.burrito.currentChoice = "defend"
            const defendBurritoImg = document.getElementById ("originalburrito")
            defendBurritoImg.src =  "https://i.imgur.com/yabXcp3.png"
        })
    },
    heal () {
        const healButton = document.querySelector("#healburrito")
        healButton.addEventListener ("click", (event) => {
            this.burrito.currentChoice = "heal"
            const healBurritoImg = document.getElementById ("originalburrito")
            healBurritoImg.src = "https://i.imgur.com/Lzka3TY.png"
        })
    },
 }

const player2 = {

    taco: new Player (),

    attack () {
        const attackButton = document.querySelector("#attacktaco")
        attackButton.addEventListener ("click", (event) => {
            this.taco.currentChoice = "attack"
            const attackTacoImg = document.getElementById ("originaltaco")
            attackTacoImg.src = "https://i.imgur.com/sutkZFj.png"
            // attackTacoImg.style.width = "310px"
            // attackTacoImg.style.marginTop = "210px"
            // attackTacoImg.style.marginLeft = "600px"
            
        })
    },

    defend () {
        const defendButton = document.querySelector("#defendtaco")
        defendButton.addEventListener ("click", (event) => {
            this.taco.currentChoice = "defend"
            const defendTacoImg = document.getElementById ("originaltaco")
            defendTacoImg.src = "https://i.imgur.com/JSK9C0v.png"
            // defendTacoImg.style.marginTop = "175px"
            // defendTacoImg.style.maxWidth = "400px"
            // defendTacoImg.style.marginLeft = "600px"
        })
    },
    heal () {
        const healButton = document.querySelector("#healtaco")
        healButton.addEventListener ("click", (event) => {
            this.taco.currentChoice = "heal"
            const healTacoImg = document.getElementById ("originaltaco")
            healTacoImg.src = "https://i.imgur.com/epqAvX7.png"
        //     healTacoImg.style.marginTop = "190px"
        //     healTacoImg.style.maxWidth = "350px"
        })
    },
}
const result = document.querySelector("#result")

const playerChoice = () => {
    player1.attack()
    player1.defend()
    player1.heal()
    player2.attack()
    player2.defend()
    player2.heal()
}
playerChoice()

const game = () => {

    if (player1.burrito.currentChoice == "attack"){
        if (player2.taco.currentChoice == "attack") {
          result.innerHTML = "Burrito and Taco have both landed blows on their rival. Make your next move."
          player1.burrito.health -= 10
          player2.taco.health -= 10
          document.querySelector("#burritohealth").innerHTML = "Burrito Health: " + `${player1.burrito.health}`
          document.querySelector("#tacohealth").innerHTML = "Taco Health: " + `${player2.taco.health}`
          
          const attackAnimation = () => {
          document.querySelector("#originalburrito").style.marginLeft = "50%"
          document.querySelector("#originaltaco").style.marginRight = "50%"
          console.log("attack")
          }
            // attackAnimation()
        const runAttack = setInterval(attackAnimation(), 500)
        
        
        const stopAttack = () => { 
            clearInterval(runAttack)
        }
        // stopAttack()
        const timeOut = setTimeout(stopAttack,500)
       
          
          
          const returnAnimation = () => {
            document.querySelector("#originalburrito").style.marginLeft = "0%"
            document.querySelector("#originaltaco").style.marginRight = "0%"
            console.log("return")
          }
        //   returnAnimation()
          const runReturn =  setTimeout(returnAnimation,1000)
          
          const stopReturn = ()=> {clearInterval(runReturn)}
        //   stopReturn()
        }




        else if (player2.taco.currentChoice === "defend") {
          result.innerHTML = "Taco is defending. Burrito bounces off of Taco's force field. Make your next move."
          player1.burrito.health -= 5
          document.querySelector("#burritohealth").innerHTML = "Burrito Health: " + `${player1.burrito.health}`
        //   const attackBurrito = () => {
        //     document.querySelector("#originalburrito").style.marginLeft = "125%"
        //     }
        //     const runAttackBurrito = setInterval(attackBurrito, 500)
        //     const stopAttackBurrito = clearInterval(attackBurrito)
        //     const returnBurrito = () => {
        //       document.querySelector("#originalburrito").style.marginLeft = "0%"
              
        //     }
        //     const runReturnBurrtio = setInterval (returnBurrito,500)
        //     const stopReturnBurrito = clearInterval(returnBurrito)
        
        }
        else  if (player2.taco.currentChoice === "heal") {
          result.innerHTML = "Taco has chosen to heal, but Burrito still lands an attack. Make your next move."
          player2.taco.health -= 5
          document.querySelector("#tacohealth").innerHTML = "Taco Health: " + `${player2.taco.health}`
            }       
        }
      else if (player1.burrito.currentChoice ==="defend") {
         if(player2.taco.currentChoice === "attack") {
          result.innerHTML = "Taco bounces off of Burrito's force field. Make your next move."
          player2.taco.health -= 5
          document.querySelector("#tacohealth").innerHTML = "Taco Health: " + `${player2.taco.health}`
        } 
         else if (player2.taco.currentChoice === "defend") {
          result.innerHTML = "Burrito and Taco have raised thier force fields. Make your next move."
        } 
         else if (player2.taco.currentChoice === "heal")
          result.innerHTML = " Burrito has chosen to defend and Taco has chosen to heal. Make your next move."
          player2.taco.health += 5
          document.querySelector("#tacohealth").innerHTML = "Taco Health: " + `${player2.taco.health}`
        }
       
      else if (player1.burrito.currentChoice === "heal") {
        if (player2.taco.currentChoice === "attack") {
          result.innerHTML = "Burrito has chosen to heal, but Taco still lands an attack. Make your next move."
          player1.burrito.health -= 5
          document.querySelector("#burritohealth").innerHTML = "Burrito Health: " + `${player1.burrito.health}`
        } else if(player2.taco.currentChoice === "defend") {
          result.innerHTML = "Burrito has chosen to heal and Taco has chosen to defend. Make your next move."
          player1.burrito.health += 5
          document.querySelector("#burritohealth").innerHTML = "Burrito Health: " + `${player1.burrito.health}`
        } else if (player2.player2.currentChoice === "heal") {
          result.innerHTML = "Burrito and Taco take a break to heal. Make your next move."
          player1.burrito.health += 5
          player2.taco.health += 5
          document.querySelector("#burritohealth").innerHTML = "Burrito Health: " + `${player1.burrito.health}`
          document.querySelector("#tacohealth").innerHTML = "Taco Health: " + `${player2.taco.health}`
            }
        }
        endGame = () => {
            if (player1.burrito.health === 0) {
                const defeatedBurrito = document.getElementById("originalburrito")
                defeatedBurrito.src = ""
                const victoryTaco = document.getElementById ("originaltaco")
                victoryTaco.src = "https://i.imgur.com/6VuLdv9.png"
                result.innerHTML = "Taco has defeated Burrito to become the Supreme Mexican Food"
                document.getElementById("battle").disabled = true
                document.getElementById("start").disabled = true
                const refresh = document.createElement ("button")
                refresh.innerText = "Refresh Game"
                const appendToTop = document.querySelector(".gameplay")
                appendToTop.appendChild(refresh)
                refresh.style.fontSize = "20px"
                refresh.style.marginBottom = "0px"
                refresh.addEventListener("click", (event)=> {
                     location.reload()
                 })
            }
            else if (player2.taco.health === 0) {
                const defeatedTaco = document.getElementById("originaltaco")
                defeatedTaco.src = ""
                const victoryBurrito = document.getElementById("originalburrito")
                victoryBurrito.src = "https://i.imgur.com/ROYglNr.png"
                result.innerHTML = "Burrito has defeated Taco to become the Supreme Mexican Food"
                const refresh = document.createElement ("button")
                refresh.innerText = "Refresh Game"
                const appendToTop = document.querySelector(".gameplay")
                appendToTop.appendChild(refresh)
                refresh.style.fontSize = "20px"
                refresh.style.marginBottom = "0px"
                document.getElementById("battle").disabled = true
                document.getElementById("start").disabled = true
                refresh.addEventListener("click", (event)=> {
                    location.reload()
                })
            }
            
        }
        endGame()
}

const start = () => {
    const startButton = document.querySelector("#start")
    startButton.addEventListener("click", (event) => {
        result.innerHTML = "Once each player has made their move, click the Battle Commence button."
        document.getElementById("start").disabled = true
    })
}
start ()
const battle = () => {
    const battleButton = document.querySelector("#battle")
    battleButton.addEventListener("click", (event) => {
        game ()
    })
}
battle ()