class TicTacToe {
    constructor() {
        this.currentPlayer = 'X';
        this.slots = new Array(9).fill(undefined)
        this.drawBoard();
    }

    playerTurn(slotNum) {
        //*** check if that slot is already filled (if so, return)

        // if (slotIsAlreadyFilled) {
        //     return
        // }
        
        
        //grab the slot, draw the current player in slot box
        let slot = document.getElementById(`slot${slotNum}`);
        slot.innerText = this.currentPlayer;

        //this is filling the array at the slotNum with the value of the current player
        this.slots[slotNum] = this.currentPlayer;

        // console.log(`You clicked # ${slotNum} as ${this.currentPlayer}`)
        console.log(this.slots)

        
        //check if there is a winner [u,u,O,X,X,O,u,X,O]
        if (this.slots[2] === this.slots[5] && this.slots[5] === this.slots[8] && this.slots[2] !== undefined) {
            console.log(`You won!`)
        }

        //after all the things have been done (all of the above), switches the current player
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }

    drawBoard() {
        const board = document.getElementById('board');
        board.innerHTML = '';
    
        // Create a div to represent each cell in the tic-tac-toe board
        let num = 0;
        for (let i = 0; i < 3; i++) {
            const row = document.createElement('div')
            row.setAttribute('class','row')
            for (let j = 0; j < 3; j++) {
                let slotNum = num;
                const cell = document.createElement('div');
                cell.id = `slot${slotNum}`;
                cell.classList.add('cell'); // Add a class to style the cells
                cell.setAttribute('data-row', i);
                cell.setAttribute('data-col', j);
                cell.textContent = '';
                cell.addEventListener('click', () => {
                    this.playerTurn(slotNum);
                });
                row.appendChild(cell);
                num++;
            }
            board.appendChild(row)
        }
    }

    gameOver() {
        //below the board

        //specify who won

        //create a div, inside that div, say .innterText = 'Current player Won!'
    }
}

// let start = document.getElementById('start')
// //start.addEventListener('click', drawBoard()); // on click run 'undefined'
// start.addEventListener('click', () => {
//     new TicTacToe()
// });

let game = new TicTacToe();