var endereco = document.getElementById('endereco');
var buttonIr = document.getElementById('ir');
var selectSite = document.getElementById('site');
var win;
var usuario = document.getElementById('usuario');
var senha = document.getElementById('senha');
var entrar = document.getElementById('entrar');
var valor = document.getElementById('valor');
var percentual = document.getElementById('percentual');
var avista = document.getElementById('avista');
var prazo = document.getElementById('prazo');
var valo = document.getElementById('valo');
var result;
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

avista.addEventListener('change', function () {
    if (prazo.checked) {
        prazo.checked = false;
    }
    if (valo.value) {
        let result = valo.value - (valo.value * 5/100);
        alert('Valor a pagar de: '+ result);
        avista.checked = false;
        valo.value = '';
    }else{
        alert('Preencha o campo valor antes');
        avista.checked = false;
    }
})
prazo.addEventListener('change', function () {
    if (avista.checked) {
        avista.checked = false;
    }
    if (valo.value) {
        result = valo.value + (valo.value * 5/100);
        alert('Valor a pagar de: '+ result);
        prazo.checked = false;
        valo.value = '';
    }else{
        alert('Preencha o campo valor antes');
        prazo.checked = false;
    }
})

var valorD = document.getElementById('valorD');
var quantidadeDias = document.getElementById('quantidadeDias');
var banheiro = document.getElementById('banheiro');
var banheira = document.getElementById('banheira');
var tv = document.getElementById('tv');
var net = document.getElementById('net');
var cal = document.getElementById('cal');

cal.addEventListener('click', function(){
    result = 0;
    if (valorD.value && quantidadeDias.value) {
        if (banheiro.checked) {
            result = result + 30;
        }if (banheira.checked) {
            result = result + 100;
        }if (tv.checked) {
            result = result + 40;
        }if (net.checked) {
            result = result + 80;
        }
        result = result + (valorD.value * quantidadeDias.value);
        alert('Total a pagar: R$ '+ result);
        valorD.value = '';
        quantidadeDias.value = '';
        banheiro.checked = false;
        banheira.checked = false;
        tv.checked = false;
        net.checked = false;
    }
})

var coment = document.getElementById('comentario');
var redi = document.getElementById('redi');

redi.addEventListener('click', function () {
    if (coment.value) {
        window.location.href = "http://127.0.0.1:5500/atividadeJS/redirect.html";
    }
})
