// Easter egg
document.getElementById("prenda").addEventListener("input", function () {
    const entrada = this.value.trim().toLowerCase();
    const espaco = document.getElementById("easterEgg");

    switch (entrada) {
        case "fogueira":
            espaco.className = "fs-4 h-100 align-self-center ms-2 rounded border border-1 border-black border-opacity-25";
            espaco.innerHTML = "🔥";
            break;
        case "sanfona":
            espaco.className = "fs-4 h-100 align-self-center ms-2 rounded border border-1 border-black border-opacity-25";
            espaco.innerHTML = "🪗"
            break;
        default:
            espaco.innerHTML = "";
    }
});

// Script necessário pra rodas as toasts. Tá disponível lá na documentação do bootstrap onde eles demonstram as toasts
// Isso aqui é um IIFE, meio complicado de explicar, mas assiste esse vídeo aqui https://www.youtube.com/watch?v=qgR1oWFTF0M
(() => {
    'use strict'

    // Dá fetch em todos os formulários que habilitaram a ferramenta de validação do Bootstrap
    const forms = document.querySelectorAll('.needs-validation')

    // Loopa por todos eles para prevenir submissão
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

// Aviso de sucesso caso o usuário tenha preenchido os campos do formulário corretamente
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    const form = this;

    // Checando validação do Bootstrap pra não rodar a toast se o formulário não for validado
    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        document.getElementById("botaoEnviar").innerHTML = "Enviar";
        return;
    }

    // Muda o texto do botão
    document.getElementById("botaoEnviar").innerHTML = "🎉 Enviado! 💃🏻";

    // Pega o primeiro nome que o usuário informou no campo do nome
    const input = document.getElementById("campoNome"); // FIXING: Testar no troubleshooter, provavelmente retorna null
    const primeiroNome = input.value.trim().split(" ")[0];

    // Busca a toast no finalzinho do body
    const conteudo = document.getElementById("conteudoAviso");
    conteudo.textContent = `Anarriê, ${primeiroNome}! Contamo com a tua ajuda pra miorá ainda mais o nosso arraiá!`;

    // Cria a toast e mostra
    const toast = new bootstrap.Toast(document.getElementById("avisoValidacao"));
    toast.show();

    // Valida o formulário
    form.classList.add("was-validated");
});