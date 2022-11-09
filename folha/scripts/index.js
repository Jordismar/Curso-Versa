var nome = document.getElementById('nome');
var filhos = document.getElementById('filhos');
var salario = document.getElementById('salario');
var calcular = document.getElementById('calcular');
var result = document.getElementById('result');

calcular.addEventListener('click', function  () {
    s = parseFloat(salario.value);
    if(s){
        if (s <= 806.80 ) {
            if(filhos.value > 0){
                aux = s + (filhos.value * 41.37);
                result.innerHTML = 'Salário Família: R$ '+ aux.toFixed(2);
            }
            else{
                result.innerHTML = 'Salário Família: R$ '+ s.toFixed(2);
            }
        }else if (s <= 1212.64 ) {
            if(filhos.value > 0){
                aux = s + (filhos.value * 29.16);
                result.innerHTML = 'Salário Família: R$ '+ aux.toFixed(2);
            }
            else{
                result.innerHTML = 'Salário Família: R$ '+ s.toFixed(2);
            }
        }else if (s > 1212.64 ) {
            result.innerHTML = 'Salário Família: R$ '+ s.toFixed(2);
        }
        nome.value = '';
        filhos.value = '';
        salario.value = '';
    }else{
        alert('Campo Salário é obrigario');
    }
})
