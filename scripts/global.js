// Fetch do cabeçalho
fetch('cabecalho.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById("placeholderCabecalho").innerHTML = data;
        });

// Fetch do rodapé
fetch('rodape.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById("placeholderRodape").innerHTML = data;
        });