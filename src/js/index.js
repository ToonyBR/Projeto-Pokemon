const botaoAlterarTema = document.getElementById("Botao-alterar-Tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    
    body.classList.toggle("modo-escuro");

    if(modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagem/sun.png")
}
     else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagem/moon.png")
    }
});