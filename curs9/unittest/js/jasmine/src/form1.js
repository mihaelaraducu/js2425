// Funcția pentru validarea emailului
function valideazaEmail(email) {
    // Verifică dacă emailul are un format valid
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}