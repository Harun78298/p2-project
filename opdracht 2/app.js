document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Voorkom dat het formulier herlaadt

    // Haal gebruikersinput op
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simpele validatie (gebruik echte validatie op een server in productie!)
    if (username === "admin" && password === "1234") {
        alert("Succesvol ingelogd!");
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Ongeldige gebruikersnaam of wachtwoord.";
    }
});