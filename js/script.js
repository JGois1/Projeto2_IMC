function calcularImc() {

    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var result = document.getElementById('result');

    console.log(altura);
    console.log(peso);
    //var = variavel
    //no JS eu não preciso declarar os tipos (ex: float, int, string) ele se detecta sozinho.
    //console.log('Variavel');  essa função faz aparecer uma mensagenzinha no console no inspecionar do navegador

    if (altura != '' && peso != '') {
        //console.log('ok'); realizando testes...
        result.style.visibility = 'visible';

        var imc = peso / (altura * altura);
        // console.log(imc);
        result.innerHTML = '<h3>Seu IMC é: ' + imc.toFixed(2) + '</h3>';
        //innerHTMl é uma propriedade
        //toFixed é pra delimitar as casas decimais do numero

        if (imc < 18.5 || imc >= 30) {
            result.style.background = 'red';
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            result.style.background = 'green'
        }
        else {
            result.style.background = '#e68b0b'
        }
    }

    else {
        alert('Preencha todos os campos!');
    }

}

//codigo pra apertar Enter
var inputPeso = document.getElementById('peso');
//associando o evento de 'solar uma tecla' ao input
inputPeso.addEventListener('keyup',function(e){
    //e -> resposta do browser ao evento

    if(e.key=='Enter'){
        calcularImc();
    }
})

//melhorando a digitação da altura e peso com uma biblioteca



