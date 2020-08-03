window.addEventListener('DOMContentLoaded', (event) => {
    const board = document.getElementById('board');
    const submitButton = document.getElementById('submit');
	
	

    submitButton.addEventListener('click', (event) => {
        const board = document.getElementById('board');
        const alertBox = document.getElementById('alert-box');

        let gridColumns = document.getElementById('columns').value;
        let gridRows = document.getElementById('rows').value;

        if (haveOnlyDigits(gridColumns) && haveOnlyDigits(gridRows) && gridColumns <= 20 && gridRows <= 20) {
            generateBoard(board, gridColumns, gridRows);
            alertBox.style.display = 'none';
        } else {
            alertBox.style.display = 'inline';
        }
    });
	
	document.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            submitButton.click();
        }
    });
});

function generateBoard(board, gridColumns, gridRows) {
    board.style.gridTemplateColumns = 'repeat(' + gridColumns + ', 1fr)';
    board.style.gridTemplateRows = 'repeat(' + gridRows + ', 1fr)';
    for (let x = 1; x < gridRows + 1; x++) {
        for (let y = 1; y < gridColumns + 1; y++) {
            let elem = document.createElement('div');
            elem.id = 'x' + (x - 1).toString() + 'y' + (y - 1).toString();
            elem.style.gridColumn = y;
            elem.style.gridRow = x;
            if ((x + y) % 2 === 0) {
                elem.className = 'white';
            } else {
                elem.className = 'black';
            }

            board.appendChild(elem);
        }
    }
}

function haveOnlyDigits(val) {
    return /^\d+$/.test(val);
}