
        const cells = document.querySelectorAll('.cell');
        let currentPlayer = 'X';
        let gameActive = true;

        cells.forEach(cell => {
            cell.addEventListener('click', handleCellClick);
        });

        function handleCellClick(e) {
            const cell = e.target;

            if (!gameActive || cell.textContent !== '') {
                return;
            }

            cell.textContent = currentPlayer;
            cell.classList.add(currentPlayer);
            checkGameStatus();
            togglePlayer();
        }

        function togglePlayer() {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }

        function checkGameStatus() {
            const winningCombinations = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
                [0, 4, 8], [2, 4, 6] // diagonals
            ];

            for (let combination of winningCombinations) {
                const [a, b, c] = combination;
                const cellA = cells[a];
                const cellB = cells[b];
                const cellC = cells[c];

                if (cellA.textContent === '' || cellB.textContent === '' || cellC.textContent === '') {
                    continue;
                }

                if (cellA.textContent === cellB.textContent && cellB.textContent === cellC.textContent) {
                    cellA.classList.add('winner');
                    cellB.classList.add('winner');
                    cellC.classList.add('winner');
                    gameActive = false;
                    return;
                }
            }

            if (!Array.from(cells).some(cell => cell.textContent === '')) {
                gameActive = false;
            }
        }
 