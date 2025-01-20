        // Transacties array
        const transactions = [
            { type: 'inkomend', date: '2024-11-01', amount: 150.00 },
            { type: 'uitgaand', date: '2024-11-03', amount: -50.00 },
            { type: 'inkomend', date: '2024-11-05', amount: 200.00 },
            { type: 'uitgaand', date: '2024-11-10', amount: -30.00 },
        ];

        // Toon transacties
        function displayTransactions(transactionsToDisplay) {
            const transactionList = document.getElementById('transactionList');
            transactionList.innerHTML = '';

            if (transactionsToDisplay.length === 0) {
                transactionList.innerHTML = '<p>Geen transacties gevonden.</p>';
                return;
            }

            transactionsToDisplay.forEach(transaction => {
                const transactionDiv = document.createElement('div');
                transactionDiv.classList.add('transaction');

                transactionDiv.innerHTML = `
                    <span>Type: <strong>${transaction.type}</strong></span>
                    <span>Datum: <strong>${transaction.date}</strong></span>
                    <span class="${transaction.amount > 0 ? 'income' : 'expense'}">Bedrag: €${transaction.amount.toFixed(2)}</span>
                `;

                transactionList.appendChild(transactionDiv);
            });
        }

        // Filter functie
        function filterTransactions() {
            const typeFilter = document.getElementById('typeFilter').value;
            const dateFilter = document.getElementById('dateFilter').value;

            const filteredTransactions = transactions.filter(transaction => {
                const matchesType = typeFilter === 'all' || transaction.type === typeFilter;
                const matchesDate = !dateFilter || transaction.date === dateFilter;
                return matchesType && matchesDate;
            });

            displayTransactions(filteredTransactions);
        }

        // Initiale weergave
        displayTransactions(transactions);