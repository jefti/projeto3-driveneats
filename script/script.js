let prato_nome = "";
let bebida_nome = "";
let sobremesa_nome = "";
let prato_preco = 0
let bebida_preco = 0;
let sobremesa_preco = 0;
let total = 0;



let nome = "";
let endereco = "";


function subN(classe, texto){
    const elemento = document.querySelector(classe);
    //console.log(elemento);
    elemento.innerHTML = texto;
};

function subP(classe, texto){
    const elemento = document.querySelector(classe);
    //console.log(elemento);
    elemento.innerHTML = "R$ "+texto;
};

function checar(){
    if(prato_nome !="" && bebida_nome !="" && sobremesa_nome !=""){
        const butao = document.querySelector('button');
        //console.log(butao);
        butao.innerHTML="Fechar Pedido";
        butao.disabled = false;
    }
};

function atualizar(categoria, nome_selec,preco_selec){
    //console.log(categoria + ' atualizado')
    if(categoria == '.pratos'){
        prato_nome = nome_selec;
        prato_preco = preco_selec;
        //console.log(prato_nome +" " + prato_preco);
    }else if(categoria == '.bebidas'){
        bebida_nome = nome_selec;
        bebida_preco = preco_selec;
    }else if(categoria == '.sobremesas'){
        sobremesa_nome = nome_selec;
        sobremesa_preco = preco_selec;
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
    const nome_selec = document.querySelector(classe +' .nome').innerHTML;
    const preco_selec = document.querySelector(classe +' .preco .preco_box .numero').innerHTML;
    //console.log(preco_selec);


    const elemento = document.querySelector(classe);
    //console.log(elemento)
    const icone = document.querySelector(classe + ' .preco ion-icon')
    //console.log(icone)
    //elemento.classList.remove('selecionado');
    elemento.classList.add("selecionado");
    icone.classList.remove('invisivel');
    //console.log('deu certo!')

    atualizar(categoria,nome_selec,preco_selec);
    checar();

};

function clicar(){
    nome=prompt('Informe seu nome:');
    endereco = prompt('informe seu endereco:');
    //console.log("nome: "+nome+" endereço: "+endereco);
    const caixa = document.querySelector('.bonus_back');
    const caixa2 = document.querySelector('.bonus_box');
    caixa.classList.remove('invisivel');
    caixa2.classList.remove('invisivel');
    caixa.classList.add('frente');

    total = (parseFloat(prato_preco) + parseFloat(bebida_preco) + parseFloat(sobremesa_preco)).toFixed(2);

    subN('.bonus_prato .b_nome', prato_nome);
    subP('.bonus_prato .b_preco', prato_preco);

    subN('.bonus_bebida .b_nome', bebida_nome);
    subP('.bonus_bebida .b_preco', bebida_preco);

    subN('.bonus_sobremesa .b_nome', sobremesa_nome);
    subP('.bonus_sobremesa .b_preco', sobremesa_preco);

    subP('.bonus_total .b_preco',total);

    confirmar();
};

function cancelar(){
    const caixa = document.querySelector('.bonus_back');
    const caixa2 = document.querySelector('.bonus_box');
    caixa.classList.remove('frente');
    caixa2.classList.add('invisivel');
    caixa.classList.add('invisivel');

    prato_nome = "";
    bebida_nome = "";
    sobremesa_nome = "";
    prato_preco = 0
    bebida_preco = 0;
    sobremesa_preco = 0;
    total = 0;

    const butao = document.querySelector('button');
    butao.innerHTML="Selecione os 3 itens para fechar o pedido";
    butao.disabled = true;

    const icone_sobremesa= document.querySelector('.sobremesas .selecionado .preco ion-icon')
    icone_sobremesa.classList.add('invisivel');
    
    const icone_bebida= document.querySelector('.bebidas .selecionado .preco ion-icon')
    icone_bebida.classList.add('invisivel');
    
    const icone_prato= document.querySelector('.pratos .selecionado .preco ion-icon')
    icone_prato.classList.add('invisivel');
    
    const prato_1 = document.querySelector('.pratos .selecionado');
    prato_1.classList.remove('selecionado');

    const bebida_1 = document.querySelector('.bebidas .selecionado');
    bebida_1.classList.remove('selecionado');

    const sobremesa_1 = document.querySelector('.sobremesas .selecionado');
    sobremesa_1.classList.remove('selecionado');
 

}

function confirmar(){
    const prt1="https://wa.me/5583999633138?text=Olá,%20Gostaria%20de%20fazer%20o%20pedido:%0A%0A-";
    const prt2 = "%20Prato:%20" + prato_nome+"%0A-";
    const prt3 = "%20Bebida:%20" + bebida_nome+"%0A-";
    const prt4 = "%20Sobremesa:%20" + sobremesa_nome+"%0A%0A";
    const prt5 = "TOTAL:%20R$%20" + total+"%0A";
    const prt6 = "%0ANome:%20" + nome+"%0A";
    const prt7 = "Endereço:%20" + endereco;
    const ancora = document.querySelector('.bonus_confirm a');
    //console.log(ancora);
    const mensagem = prt1+ prt2 + prt3 + prt4 + prt5 + prt6+prt7
    ancora.href = mensagem;
}