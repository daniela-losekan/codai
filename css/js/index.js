var nome = "Daniela";
var cargo = developer
var cargohtml = document.getElementById("cargo-no-html");
var texto1 = document.get.getElementById("texto-1");
var texto2 = document.get.getElementById("texto-2");

function dizerOla (){
    alert("ola Daniela");
}
function colocarcargonohtml(cargo){
cargohtml.linnerHTML = cargo;
}
function LogarNome(){
    console.log(nome);
}
colocarcargonohtml(cargo);

function ClickNoProjetos() {
    console.log("clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function ClickNoSobre() {
    console.log("Clicou no Sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colarNomeNoHtml(Nome);
colocarcargonohtml(Cargo);