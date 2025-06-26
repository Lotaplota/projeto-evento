document.getElementById("prenda").addEventListener("input", function () {
    const entrada = this.value.trim().toLowerCase();
    const espaco = document.getElementById("easterEgg");

    switch (entrada) {
        case "fogueira":
            // espaco.className = "bg-warning text-white p-4 mt-3";
            espaco.innerHTML = "🔥";
            break;
        case "sanfona":
            espaco.innerHTML = "🪗"
            break;
        default:
            espaco.innerHTML = "";
    }
});