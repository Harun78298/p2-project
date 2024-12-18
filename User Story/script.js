// Functie om verschillende secties te tonen en verbergen
function showContent(sectionId) {
    // Alle secties verbergen
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // De geselecteerde sectie tonen
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

// Standaard de Home-sectie tonen bij het laden van de pagina
document.addEventListener("DOMContentLoaded", () => {
    showContent('home');
});
