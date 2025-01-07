document.getElementById('transferButton').addEventListener('click', function () {
    // Haal waarden op uit het formulier
    const fromAccountSelect = document.getElementById('fromAccount');
    const toAccountSelect = document.getElementById('toAccount');
    const amountInput = document.getElementById('amount');
    const feedback = document.getElementById('feedback');

    // Informatie over de gekozen rekening
    const fromAccountBalance = parseFloat(fromAccountSelect.selectedOptions[0].dataset.balance);
    const transferAmount = parseFloat(amountInput.value);
    const fromAccountName = fromAccountSelect.options[fromAccountSelect.selectedIndex].text;
    const toAccountName = toAccountSelect.options[toAccountSelect.selectedIndex].text;

    // Reset feedback
    feedback.innerHTML = '';
    feedback.className = 'feedback';

    // Validaties
    if (fromAccountSelect.value === toAccountSelect.value) {
        feedback.classList.add('error');
        feedback.innerText = 'De bron- en doelrekening mogen niet hetzelfde zijn.';
        return;
    }

    if (isNaN(transferAmount) || transferAmount <= 0) {
        feedback.classList.add('error');
        feedback.innerText = 'Voer een geldig bedrag in.';
        return;
    }

    if (transferAmount > fromAccountBalance) {
        feedback.classList.add('error');
        feedback.innerText = `Onvoldoende saldo op de ${fromAccountName.toLowerCase()}.`;
        return;
    }

    // Transactie geslaagd
    feedback.classList.add('success');
    feedback.innerHTML = `€${transferAmount.toFixed(2)} is succesvol overgeschreven van ${fromAccountName.toLowerCase()} naar ${toAccountName.toLowerCase()}.`;
});
