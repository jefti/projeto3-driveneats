let prato = 0
let bebida = 0;
let sobremesa = 0;




function checar(){
    if(prato !=0 && bebida != 0 && sobremesa != 0){
        const butao = document.querySelector('button');
        butao.innerHTML="Fechar Pedido";
        //console.log(butao);
        butao.disabled = false;
    }
};

function atualizar(categoria){
    //console.log(categoria + ' atualizado')
    if(categoria == '.pratos'){
        prato = 1;
    }else if(categoria == '.bebidas'){
        bebida = 1;
    }else if(categoria == '.sobremesas'){
        sobremesa = 1;
    }
};


function selecionar(classe,categoria){
    //teste inicial
    const teste = document.querySelector(categoria + ' .selecionado');
    //console.log(teste);
    if(teste != null){
        //console.log('entrou no if')
        iconet= document.querySelector(categoria +' .selecionado .preco ion-icon')
        //console.log(iconet);
        iconet.classList.add('invisivel');
        teste.classList.remove('selecionado');

    }
    
    const elemento = document.querySelector(classe);
    //console.log(elemento)
    const icone = document.querySelector(classe + ' .preco ion-icon')
    //console.log(icone)
    //elemento.classList.remove('selecionado');
    elemento.classList.add("selecionado");
    icone.classList.remove('invisivel');
    //console.log('deu certo!')

    atualizar(categoria);
    checar();

};
