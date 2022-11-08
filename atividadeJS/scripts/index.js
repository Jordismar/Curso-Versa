var endereco = document.getElementById('endereco');
var buttonIr = document.getElementById('ir');
var selectSite = document.getElementById('site');
var win;
var usuario = document.getElementById('usuario');
var senha = document.getElementById('senha');
var entrar = document.getElementById('entrar');
var valor = document.getElementById('valor');
var percentual = document.getElementById('percentual');

buttonIr.addEventListener('click', function () {
    win = window.open(endereco.value, '_blank');
    win.focus();
});

selectSite.addEventListener('change', function () {
    if(selectSite.value = 1){
        win = window.open("https://www.globo.com/", '_blank');
        win.focus();
    }else if(selectSite.value = 2){
        win = window.open("https://www.terra.com.br", '_blank');
        win.focus();
    }else if(selectSite.value = 3){
        win = window.open("https://www.uol.com.br", '_blank');
        win.focus();
    }

    selectSite.value = 0;
});

entrar.addEventListener('click', function () {
    if ((usuario.value == 'SENAI') && (senha.value == 'SENAI')) {
        alert("Usuario Valido");
    }else{
        alert("Usuario ou Senha Incorreto");
        usuario.value ='';
        senha.value ='';
    }
})

percentual.addEventListener('change', function () {
    let aux;
    aux = (valor.value * percentual.value)/100;
    alert('O valor do Percentual é ' + aux);
})
