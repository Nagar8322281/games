
let stats = document.querySelector("#stats");
let board = document.querySelector("#board");

class TicTacToe {
    constructor() {
        this.rows = 3;
        this.columns = 3;
        this.turn = 0;
        this.clicks = [];
        this.buildBoard();
    }

    buildBoard() {
        for (let i = 0; i < this.rows * this.columns; i++) {
            let newCell = document.createElement("div");
            newCell.classList.add("cell");
            newCell.id = `_${i}`;
            newCell.addEventListener("click", () => {
                this.click(newCell, i);
            });
            this.clicks[i] = i;
            board.appendChild(newCell);
        }
    }

    click(cell, i) {
        if (this.turn++ % 2 === 0) {
            this.clicks[i] = "X";
            cell.innerHTML = "X";
            cell.style.color = "red";
            stats.innerHTML = "O's turn";
        } else {
            this.clicks[i] = "O";
            cell.innerHTML = "O";
            cell.style.color = "blue";
            stats.innerHTML = "X's turn";
        }
        cell.style.pointerEvents = "none";
        this.checkWin();
    }

    checkWin() {
        for (let i = 0; i < this.rows * this.columns; i += 3) {
            if (this.clicks[i] === this.clicks[i + 1] && this.clicks[i] === this.clicks[i + 2]) {
                return this.winGame();
            }
        }
        for (let i = 0; i < this.rows; i++) {
            if (this.clicks[i] === this.clicks[i + 3] && this.clicks[i] === this.clicks[i + 6]) {
                return this.winGame();
            }
        }
        if (this.clicks[0] === this.clicks[4] && this.clicks[0] === this.clicks[8]) {
            return this.winGame();
        }
        if (this.clicks[2] === this.clicks[4] && this.clicks[2] === this.clicks[6]) {
            return this.winGame();
        }
        if (this.turn === 9) {
            this.tie();
        }
    }

    winGame() {
        for (let i = 0; i < this.rows * this.columns; i++) {
            let cell = document.querySelector(`#_${i}`);
            cell.style.pointerEvents = "none";
        }
        stats.innerHTML = (this.turn % 2 === 0) ? "O wins 🏆" : "X wins 🏆";
    }

    tie() {
        stats.innerHTML = "It's a tie! Play another game.";
    }
}

const game = new TicTacToe();
