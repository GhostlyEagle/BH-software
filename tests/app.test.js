/**
 * @jest-environment jsdom
 */

const {
    calculateArea,
    addNote,
    startTimer
} = require('../public/app.js'); // Caminho para o seu app.js

describe('Testes de funcionalidades', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <input id="width-input" type="number" placeholder="Largura">
            <input id="height-input" type="number" placeholder="Altura">
            <button id="calculate-area-btn">Calcular Área</button>
            <p>Área: <span id="area-result">0</span></p>
            <input id="note-input" placeholder="Digite uma nota">
            <button id="add-note-btn">Adicionar Nota</button>
            <ul id="note-list"></ul>
            <button id="start-timer-btn">Iniciar Temporizador</button>
            <p>Segundos: <span id="timer">0</span></p>
        `;
    });

    test('Deve calcular a área de um retângulo', () => {
        document.getElementById('width-input').value = 5;
        document.getElementById('height-input').value = 10;

        calculateArea();

        expect(document.getElementById('area-result').textContent).toBe('50');
    });

    test('Deve adicionar uma nota à lista', () => {
        const noteInput = document.getElementById('note-input');
        
        noteInput.value = 'Nota 1';
        addNote();
        expect(document.getElementById('note-list').children.length).toBe(1);
        expect(document.getElementById('note-list').children[0].textContent).toBe('Nota 1');

        noteInput.value = 'Nota 2';
        addNote();
        expect(document.getElementById('note-list').children.length).toBe(2);
        expect(document.getElementById('note-list').children[1].textContent).toBe('Nota 2');
    });

    test('Deve iniciar o temporizador', (done) => {
        startTimer();

        setTimeout(() => {
            expect(document.getElementById('timer').textContent).toBe('1');
            done();
        }, 1000);
    });
});
