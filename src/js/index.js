/* 
    Objetivo - Quando clicarmos no botão, temos que mostrar a imagem de fundo correspondente.
*/

//Passo 1 - Dar um jeito de pegar o elemento HTML dos botões.
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//Passo 2 - Dar um jeito de identificar o clique do usuário no botão.
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        //Passo 3 - Desmarcar o botão anterior.
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //Passo 4 - Marcar o botão clicado como se estivesse selecionada.
        botao.classList.add('selecionado');

        //Passo 5 - Esconder a imagem de fundo anterior.
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //Passo 6 - Fazer aparecer a imagem de fundo correspondente ao botão clicado.
        imagens[indice].classList.add('ativa');

    })
})
