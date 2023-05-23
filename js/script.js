function calcularImc(){
   
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value; 
    var result = document.getElementById('result');

    console.log(altura);
    console.log(peso);
    //var = variavel
    //no JS eu não preciso declarar os tipos (ex: float, int, string) ele se detecta sozinho.
    //console.log('Variavel');  essa função faz aparecer uma mensagenzinha no console no inspecionar do navegador

    if(altura != '' && peso !=''){
        //console.log('ok'); realizando testes...
        result.style.visibility='visible';
    }
    else{
        alert('Preencha todos os campos!');
    }

}



/*alert('Olá Mundo');*/  /* exibe uma mensagem na tela */