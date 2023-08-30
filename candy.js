var candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];
var board = [];
var colums = 9;
var rows = 9;
var score = 0;

var currTile;
var otherTile;




window.onload = function() {
    startGame();
    // 1/10th of a second
    window.setInterval(function() {

        crushCandy();
        slideCandy();
        generateCandy();

    }, 100);

}

function randomCandy() {
    return candies[Math.floor(Math.random() * candies.length)] //0-5.99
}


function startGame() {
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < colums; c++) {

            //<img id="0-0" src="./images/Red.png"> 

            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "./images/" + randomCandy() + ".png";

            //drage funcanility

            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);



            document.getElementById("board").append(tile);

            row.push(tile);

        }
        board.push(row);
    }
    console.log(board);
}

function dragStart() {
    currTile = this;

}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();

}

function dragLeave() {

}

function dragDrop() {
    otherTile = this;

}

function dragEnd() {

    if (currTile.src.includes("black") || otherTile.src.includes("black")) {
        return;
    }

    let currCoords = currTile.id.split("-");
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);


    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = c2 == c - 1 && r == r2;
    let moveRight = c2 == c + 1 && r == r2;

    let moveUp = r2 == r - 1 && c == c2;
    let moveDown = r2 == r + 1 && c == c2;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {

        let currImg = currTile.src;
        let otherImg = otherTile.src;
        currTile.src = otherImg;
        otherTile.src = currImg;


        let validMoves = checkValid();
        if (!validMoves) {

            let currImg = currTile.src;
            let otherImg = otherTile.src;
            currTile.src = otherImg;
            otherTile.src = currImg;


        }


    }


}

function crushCandy() {
    //crushFive();
    //crushFour();
    crushThree();
    document.getElementById("score").innerText = score;
}

function crushThree() {
    //check rows
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < colums - 2; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c + 1];

            let candy3 = board[r][c + 2];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("black")) {
                candy1.src = "./images/black.png";
                candy2.src = "./images/black.png";

                candy3.src = "./images/black.png";
                score += 10;
            }

        }

    }


    //check coloumns
    for (let c = 0; c < colums; c++) {
        for (let r = 0; r < rows - 2; r++) {


            let candy1 = board[r][c];
            let candy2 = board[r + 1][c];

            let candy3 = board[r + 2][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("black")) {
                candy1.src = "./images/black.png";
                candy2.src = "./images/black.png";

                candy3.src = "./images/black.png";
                score += 10;
            }



        }
    }

}

function checkValid() {

    //check rows
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < colums - 2; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c + 1];

            let candy3 = board[r][c + 2];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("black")) {
                return true;
            }

        }

    }


    //check colums
    for (let c = 0; c < colums; c++) {
        for (let r = 0; r < rows - 2; r++) {


            let candy1 = board[r][c];
            let candy2 = board[r + 1][c];

            let candy3 = board[r + 2][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("black")) {
                return true;

            }



        }
    }
    return false;
}


function slideCandy() {
    for (let c = 0; c < colums; c++) {
        let ind = rows - 1;
        for (let r = colums - 1; r >= 0; r--) {
            if (!board[r][c].src.includes("black")) {
                board[ind][c].src = board[r][c].src;
                ind -= 1;

            }
        }
        for (let r = ind; r >= 0; r--) {
            board[r][c].src = "./images/black.png";
        }
    }
}

function generateCandy() {

    for (let c = 0; c < colums; c++) {
        if (board[0][c].src.includes("black")) {

            board[0][c].src = "./images/" + randomCandy() + ".png";
        }
    }

}