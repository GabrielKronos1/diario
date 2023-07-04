// Seleciona os elementos do DOM
const entryInput = document.getElementById('entry');
const saveButton = document.getElementById('saveButton');
const entriesContainer = document.getElementById('entries');

// Define um array para armazenar as entradas do diário
let entries = [];

// Adiciona um evento de clique ao botão "Salvar"
saveButton.addEventListener('click', () => {
    const entryText = entryInput.value;

    if (entryText.trim() !== '') {
        entries.push(entryText);
        entryInput.value = '';
        renderEntries();
    }
});

// Renderiza as entradas do diário na página
function renderEntries() {
    entriesContainer.innerHTML = '';

    entries.forEach((entry, index) => {
        const entryElement = document.createElement('div');
        entryElement.classList.add('entry');
        entryElement.innerHTML =
            <><p>${entry}</p><button class="deleteButton" data-index="${index}">Excluir</button></>
            ;

        const deleteButton = entryElement.querySelector('.deleteButton');
        deleteButton.addEventListener('click', () => {
            entries.splice(index, 1);
            renderEntries();
        });

        entriesContainer.appendChild(entryElement);
    });
}