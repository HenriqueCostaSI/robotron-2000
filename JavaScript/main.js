const controle = document.querySelectorAll("[data-controle]");

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        
        
    })
})


function manipulaDados(operacao, controlePai) {

    
    const peca = controlePai.querySelector("[data-contador]");

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
    }else {
        peca.value = parseInt(peca.value) + 1;
    }

}