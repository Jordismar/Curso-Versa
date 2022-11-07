var cor;
cor = document.getElementById("cor");

var bt;
bt = document.getElementById("botao");

function trocaCor() {
    document.bgColor = cor.value;
}

function exibeNome() {
    nome = prompt('Nome:');
    divBB = document.getElementById("bb");
    divBB.innerHTML = nome;
}

bt.addEventListener("click", exibeNome);

cor.addEventListener("change", trocaCor);