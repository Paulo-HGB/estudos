//ALTERANDO O CONTEUDO DE ELEMENTOS
const buttonsContainer = document.querySelector(".container");

// buttonsContainer.innerHTML = '<button>Novo Botão</button>'

const firstTitle = document.querySelector("h1");

firstTitle.innerText = 'Novo Título';

//ALTERANDO ESTILOS
buttonsContainer.style.backgroundColor = 'blue';

//ALTERANDO ATRIBUTOS DAS TAGS
const lastTitle = document.getElementById('title');
lastTitle.setAttribute('id', 'customTitle');

const thirdTitle = document.querySelector('h2:nth-of-type(3)');
thirdTitle.setAttribute('id', 'orangeTitle');

lastTitle.removeAttribute('id');

//ADICIONANDO E REMOVENDO ELEMENTOS NA TELA
const newLastTitle = document.createElement('h3');
newLastTitle.innerText = 'Título novo!';
document.body.appendChild(newLastTitle);

const newButton = document.createElement('button');
newButton.innerText = 'Novo Botão';

// newButton.setAttribute('class', 'styleButton');
newButton.classList.add('styleButton', 'boldText')

buttonsContainer.appendChild(newButton);