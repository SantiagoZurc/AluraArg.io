// Variables
const showPromptButton = document.getElementById('showPrompt');
const showAlertButton = document.getElementById('showAlert');
const contentDiv = document.getElementById('content');

// Función para mostrar un alert
function showAlert() {
    alert('¡Bienvenido a mi página!');
}

// Función para mostrar un prompt y mostrar el resultado
function showPrompt() {
    const userInput = prompt('¿Cómo te llamas?');
    if (userInput) {
        contentDiv.innerHTML = `Hola, ${userInput}!`;
    } else {
        contentDiv.innerHTML = 'No ingresaste un nombre.';
    }
}

// Event listeners
showAlertButton.addEventListener('click', showAlert);
showPromptButton.addEventListener('click', showPrompt);

// Ejemplo de bucle
for (let i = 1; i <= 5; i++) {
    console.log(`Número ${i}`);
}

// Ejemplo de template strings
const message = `El bucle se ejecutó ${5} veces.`;
console.log(message);
