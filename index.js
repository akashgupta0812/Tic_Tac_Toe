const currentPlayer=document.querySelector(".game-info")
const btn=document.querySelector(".game-stauts");
let Player;
let gameGrid;
let audio1=new Audio('z_uk-sms-ayfon-din.mp3');
let audio2=new Audio('happy-wheels-z_uk-pobedy.mp3');

const winningposition=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
// btn.classList.add("active")
// currentPlayer.innerText=`current player-${player}`;
const boxes=document.querySelectorAll(".box")
function init()
{
    Player='X';
    gameGrid=["","","","","","","","",""];
    currentPlayer.innerText=`Current Player-${Player}`;
    boxes.forEach((box,index)=>{
        box.innerText="";
        boxes[index].style.pointerEvents="all";
        box.classList.remove("win")
    })
    btn.classList.remove("active");

}
init();
boxes.forEach((box,index)=>{
    // console.log(box + index)
    box.addEventListener("click",()=>{
        handleclick(index);
        audio1.play();
    })
})
function swapTurn()
{
    if(Player==='X')
    {
        Player='O';
        // currentPlayer=Y;
        currentPlayer.innerText=`Current Player-${Player}`;
    }
    else{
        Player='X';
        // currentPlayer='X'
        currentPlayer.innerText=`Current Player-${Player}`;
    }
}
function checkGameOver()
{
// btn.classList.add("active")
let answer="";
winningposition.forEach((position)=>{
if((gameGrid[position[0]]!==""||gameGrid[position[1]]!==""||gameGrid[position[2]]!=="") 
&& (gameGrid[position[0]]===gameGrid[position[1]])&&(gameGrid[position[1]]===gameGrid[position[2]]))
{
if(gameGrid[position[0]]==='X')
answer="X";
else
answer="O";
boxes[position[0]].classList.add("win");
boxes[position[1]].classList.add("win");
boxes[position[2]].classList.add("win");
boxes.forEach((box)=>{
    box.style.pointerEvents="none";

})
}
if(answer!=="")
{
    currentPlayer.innerText=`winning Player - ${answer}`    
    btn.classList.add("active")
    audio2.play();
    return;
}
let fillCount=0;
gameGrid.forEach((box)=>{
    if(box!=='')
    fillCount++;
})
if(fillCount===9)
{
    currentPlayer.innerText=`Game Tied`  
    btn.classList.add("active")


}


})

}
function handleclick(index)
{ 
if(gameGrid[index]==='')
{
    boxes[index].innerText=Player;
    gameGrid[index]=Player;
    boxes[index].style.pointerEvents="none";
    //swap
    swapTurn();
    checkGameOver();
}
    // btn.classList.add("active")
}
btn.addEventListener("click",init);

