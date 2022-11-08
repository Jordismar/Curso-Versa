var nome = document.getElementById('nome');
var base = document.getElementById('base');
var mes = document.getElementById('mes');
var calcula = document.getElementById('calcula');
var resultado = document.getElementById('calculado');
var funcionario = document.getElementById('funcionario');

base.addEventListener('change', function () {
    if (isNaN(base.value)) {
        alert("Informe um numero");
        base.value = '';
        base.focus();
    }
})

calcula.addEventListener('click', function () {

    let ir;
    b = parseFloat(base.value);

    if (b <= 1903.98) {

        ir = 0;

    } else if (b <= 2826.65) {

        ir = (b * 7.5 / 100) - 142.80;

    } else if (b <= 3751.05) {

        ir = (b * 15 / 100) - 354.80;

    } else if (b <= 4664.68) {

        ir = (b * 22.5 / 100) - 636.13;

    } else if (b > 4664.68) {

        ir = (b * 27.5 / 100) - 869.36;

    }

    funcionario.innerHTML = 'Funcionario: ' + nome.value;
    resultado.innerHTML = 'Valor do IR calculado: R$ ' + ir.toFixed(2);

    nome.value = '';
    base.value = '';
});

