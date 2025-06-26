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