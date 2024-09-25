// public/app.js

let timerInterval;
let seconds = 0;

// Função para calcular a área do retângulo
function calculateArea() {
    const width = parseFloat(document.getElementById('width-input').value);
    const height = parseFloat(document.getElementById('height-input').value);
    if (!isNaN(width) && !isNaN(height)) {
        const area = width * height;
        document.getElementById('area-result').textContent = area;
    }
}

// Função para adicionar uma nota à lista
function addNote() {
    const noteInput = document.getElementById('note-input');
    const note = noteInput.value.trim();
    if (note) {
        const li = document.createElement('li');
        li.textContent = note;
        li.onclick = () => li.remove(); // Remove a nota ao clicar
        document.getElementById('note-list').appendChild(li);
        noteInput.value = ''; // Limpar o input
    }
}

// Função para iniciar o temporizador
function startTimer() {
    seconds = 0;
    document.getElementById('timer').textContent = seconds;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        seconds++;
        document.getElementById('timer').textContent = seconds;
    }, 1000);
}

// Inicializa os event listeners
function init() {
    document.getElementById('calculate-area-btn').onclick = calculateArea;
    document.getElementById('add-note-btn').onclick = addNote;
    document.getElementById('start-timer-btn').onclick = startTimer;
}

// Chama init quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);

// Exportando as funções para testes
module.exports = {
    calculateArea,
    addNote,
    startTimer
};