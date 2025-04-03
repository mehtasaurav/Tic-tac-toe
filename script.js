console.log("Welcome to Tic Tac Toe");
let music = new Audio("./resources/music.mp3");
let audioTurn = new Audio("./resources/ting.mp3");
let gameOverMusic = new Audio("./resources/gameover.mp3");
let turn = "X";
let gameOver = false;


const changeTurn=()=>{
	return turn === "X"?"0":"X";
}


//function to check for the winner
const checkWin = () =>{
	let boxText = document.getElementsByClassName('boxText');
	let wins = [
		[0,1,2,5,5,0],
		[3,4,5,5,15,0],
		[6,7,8,5,25,0],
		[0,3,6,-5,15,90],
		[1,4,7,5,15,90],
		[2,5,8,15,15,90],
		[0,4,8,5,15,45],
		[2,4,6,5,15,135]
	];

	wins.forEach(e =>{
		if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText !== '')){
			document.querySelector('.Info').innerText = boxText[e[0]].innerText + " Won";
			gameOver = true;
			document.querySelector('.imageInfo').getElementsByTagName('img')[0].style.width = "200px";
			document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
			document.querySelector('.line').style.width = "20vw"
		}
	});

}

//main game logic	
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
	let boxText = element.querySelector('.boxText');
	element.addEventListener('click',() => {
			if(boxText.innerText ===  ''){
				boxText.innerText = turn;
				turn = changeTurn();
				audioTurn.play();
				checkWin(); 
				if(!gameOver){
				document.getElementsByClassName("Info")[0].innerText = "Turn for "+ turn; 
				}
			}
	});
});


//reste game
reset.addEventListener('click',()=>{
	let boxText = document.getElementsByClassName('boxText');
	Array.from(boxText).forEach(element =>{
		element.innerText= "";
	});
	turn='X';
	gameOver=false;
	document.getElementsByClassName("Info")[0].innerText = "Turn for "+ turn; 
	document.querySelector('.imageInfo').getElementsByTagName('img')[0].style.width = "0px";
	document.querySelector('.line').style.width = "0vw"
});