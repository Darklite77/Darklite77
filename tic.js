
let gameIntro = document.querySelector(".gameIntro")
let gameBoard = document.querySelector(".gameBoard")
let startGame = document.querySelector(".start-game")
let cells = document.querySelectorAll("[data-set]")
let message = document.querySelector(".win-message")
let tiles = document.querySelector(".cell")
let pMsg = document.querySelector(".msg")
let restartBtn = document.querySelector(".restart");
let backBtn = document.querySelector(".back")
let openSetting = document.querySelector(".settings")
let openPallete = document.querySelector(".TColor")

let settingModal = document.querySelector(".setting-modal")
let tilePallete = document.querySelector(".tile-pallete")

let head = document.querySelector(".head")

let x = "X";
let o = "O"
let circleTurn;

let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    
    ]
start();

startGame.addEventListener("click",()=>{
    hideAndDisplay()
    
    
})

backBtn.addEventListener("click",goBack);

function goBack(){
    gameIntro.style.height = "100vh"
    gameBoard.style.display = "none"
    startGame.style.display = "block"
    backBtn.style.display = "none"
    head.style.display = "none"
    
    
}

function hideAndDisplay() {
    gameIntro.style.height = "0"
    gameBoard.style.display = "grid"
    startGame.style.display = "none"
    backBtn.style.display = "block"
    head.style.display = "block"
}


/*openSetting.addEventListener("click",pallete)

function pallete(){
    settingModal.style.display = "block"
    openPallete.addEventListener("click",()=>{
        tilePallete.style.display = "block"
    })
}
*/
function start(){
    circleTurn = false
cells.forEach(function(cell){
    cell.addEventListener("click",clicks,{once:true})
    
    cell.classList.remove("X")
    cell.classList.remove("O")
    message.style.display = "none"
    
        

})

}


function clicks(e){
    let cell = e.target;
    let currentClass = circleTurn ? o : x
 
    
    placeMark(cell,currentClass)
    if(checkWin(currentClass)){
    
        
    endGame(currentClass)
        
       
        
    }
    if (checkDraw()){
        drawMsg()
    }
    swapper()
}

function placeMark(cell,currentClass){
    cell.classList.add(currentClass);
}

function swapper(){
    if (circleTurn === true){
        circleTurn = false
    }else{
        circleTurn = true;
    }
}

function checkWin(currentClass){
    return winningCombinations.some(combination => {
        return combination.every(index =>{
            return cells[index].classList.contains(currentClass)
        })
    })
    
    
}

function checkDraw(){
    return [...cells].every(cell =>{
        return cell.classList.contains(x) || cell.classList.contains(o)
    })
}


function endGame(currentClass){
   message.style.display = "block"
   
      pMsg.textContent = `${currentClass} Wins!!`
   gameBoard.style.display = "none"
   backBtn.style.display = "none"

}

function drawMsg(){
    message.style.display = " block"
    
    pMsg.textContent = "Draw Game"
    backBtn.style.display = "none"
}

function showBoard(){
    gameBoard.style.display = "grid"
}

restartBtn.addEventListener("click",()=>{
    showBoard()
    start()
    backBtn.style.display = "block";
})
