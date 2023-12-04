const boxes = document.querySelectorAll('.box');
const playerTurn = document.querySelector('#player-turn');
const restart = document.querySelector('#new-game');
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let start = false;

startGame();

function startGame(){
    boxes.forEach(box => box.addEventListener('click', boxSelected));
    restart.addEventListener('click', restartGame);
    window.alert(`${player}'s turn`);
    start = true;
}

function boxSelected(){
    const boxIndex = this.getAttribute('box');
    if(options[boxIndex] != ""){
        return;
    }
    updateBox(this, boxIndex);
    Winner();
}

function updateBox(box, index) {
    options[index] = player;
    box.textContent = player;
}

function switchPlayer(){
    player = (player == "X") ? "O" : "X";
    window.alert(`${player}'s turn`);

}

function Winner() {
    let victory = false;

    for(let i = 0; i < winPatterns.length; i++){
        const condition = winPatterns[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            victory = true;
            break;
        }

    }

    if(victory){
        window.alert(`${player} wins!`)
        start = false;
    }
    else if(!options.includes("")){
        window.alert('Draw!');
        start = false;
    }
    else{
        switchPlayer();
    }
}

function restartGame() {
    player = 'X';
    options = ["", "", "", "", "", "", "", "", ""];
    window.alert(`${player}'s turn!`);
    boxes.forEach(box => box.textContent = "");
    running = true;
}