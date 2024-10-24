const selectCustomTitle = document.getElementById("customTitle");
console.log("Titulo selecionado: ", selectCustomTitle);

const selectButtons = document.getElementsByTagName("button");
console.log("Botões da pagina:", selectButtons);

const selectBoldText = document.getElementsByClassName("boldText");
console.log("Texto em bold", selectBoldText);

const boldTexts = document.querySelector(".boldText");
console.log("Bold texts: ", boldTexts);

const allBoldTexts = document.querySelectorAll(".boldText");
console.log("Bold texts: ", allBoldTexts);