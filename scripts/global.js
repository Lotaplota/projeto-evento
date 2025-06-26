fetch('cabecalho.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById("placeholder-cabecalho").innerHTML = data;
        });
