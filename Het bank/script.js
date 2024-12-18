document.getElementById('loginBtn').addEventListener('click', function() {
    // Haal de ingevoerde waarden op
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error');
 
    // Controleer of de velden zijn ingevuld
    if (username === "" || password === "") {
        errorMessage.textContent = "Vul alle velden in.";
    } else if (username === "admin" && password === "1234") { // Voorbeeldgebruiker (pas aan naar wens)
        // Redirect naar de volgende pagina (bijvoorbeeld 'dashboard.html')
        window.location.href = 'Rekening.html';
    } else {
        errorMessage.textContent = "Ongeldige gebruikersnaam of wachtwoord.";
    }
});

function nieuweRekening() {
    const rekeningNaam = prompt("Voer de naam van de nieuwe rekening in:");
    const rekeningSaldo = prompt("Voer het beginsaldo in:");
 
    // Validatie
    if (rekeningNaam && !isNaN(rekeningSaldo) && rekeningSaldo !== "") {
        // Rekeningencontainer selecteren
        const container = document.getElementById('rekeningen-container');
 
        // Nieuwe rekening-div maken
        const nieuweRekening = document.createElement('div');
        nieuweRekening.classList.add('rekening');
        nieuweRekening.innerHTML = `
            <span>${rekeningNaam}</span>
            <span class="bedrag">&euro;${parseFloat(rekeningSaldo).toFixed(2)}</span>
        `;
 
        // Toevoegen aan container
        container.appendChild(nieuweRekening);
    } else {
        alert("Voer geldige gegevens in.");
    }
}