console.log('Earth to the console. Can you hear me?')

let board = []



function play(clickedID) {
    let playerSpan = document.getElementById('player');
    let clickedElement = document.getElementById(clickedID);

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = "O";
        clickedElement.innerText = 'X';
        board[clickedID] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedID] = '0';
    }
    console.log(board)



    
    
    const topLeft = board[0];
    const topCenter = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middleCenter = board[4];
    const middleRight = board[5];
    const bottomLeft = board[6];
    const bottomCenter = board[7];
    const bottomRight = board[8];
    
    
    console.log(topLeft,topCenter,topRight)
    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} is the winner`);
        console.log('Winner');
        board = []
    }
    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(`${middleLeft} is the winner`);
    }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} is the winner`);
        // return;
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner`);
        // return;
    }
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner`);
        // return;
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner`);
        // return;
    }
    
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} is the winner`);
        // return;
    }
    if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        alert(`${bottomLeft} is the winner`);
        // return;
    }
    
    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
        if (board[i] === undefined) {
            boardFull = false;
        }
    }
    if (boardFull === true) {
        alert("Cat's game, there is no winner");
    }
}

   // function resetGame(){
//     board = []
// getelementby id 0-8 - set intertext to be empty string



    // Step 4, use function gamePlayOff() {
    //     DOM.tiles.forEach((tile) => {
    //             tile.removeEventListener("click", insertToken);
    //             });
    //             }
            
// for (let i=0; i<9; i++) {
//     ttt.board.push(null);
//     var square = document.createElement("div");
//     square.innerHTML = "&nbsp;";
//     square.dataset.idx = i;
//     square.id = "ttt-" + i;
//     square.addEventListener("click", ttt.play);
//     container.appendChild(square);
//   }
// },