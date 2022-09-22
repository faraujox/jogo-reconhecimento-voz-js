function validaChute(chute){
    const numero = Number(chute);

    if (VerificaTipo(numero)) {
        return elementoChute.innerHTML += '<div>Valor Inválido</div>';
    }  

    if (verificaIntervalo(numero)) {
        return elementoChute.innerHTML += `<div>O numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
    }
    
    if (numero == numeroSecreto){
        return document.body.innerHTML = `
        <h1>Você acertou!<h1>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="bt-jogar">Jogar Novamente</button>`;
    }

    if (numero > numeroSecreto){
        return elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>';
    }
    
    if (numero < numeroSecreto){
        return elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>';
    }
}

function VerificaTipo(numero) {
    return Number.isNaN(numero);
}

function verificaIntervalo(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id === 'jogar-novamente'){
        window.location.reload();
    }
})