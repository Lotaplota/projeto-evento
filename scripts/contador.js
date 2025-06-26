
const Dias = document.getElementById('cronometroDias');
const Horas = document.getElementById('cronometroHoras');
const Minutos = document.getElementById('cronometroMinutos');
const Segundos = document.getElementById('cronometroSegundos');

const dataFinal = new Date("July 4 2025 23:59:99").getTime(); // Não conta pra ela que na verdade isso é um contador pro prazo de entrega + 7 dias 🤭

function contador() {
    const agora = new Date().getTime();
    const distancia = dataFinal - agora;

    const diasRestantes = Math.floor(distancia / 1000 / 60 / 60 / 24);
    const horasRestantes = Math.floor(distancia / 1000 / 60 / 60) % 24;
    const minutosRestantes = Math.floor(distancia / 1000 / 60) % 60;
    const segundosRestantes = Math.floor(distancia / 1000) % 60;

    console.log(diasRestantes + " " + horasRestantes + " " + minutosRestantes + " " + segundosRestantes);

    Dias.innerHTML = diasRestantes;
    Horas.innerHTML = horasRestantes;
    Minutos.innerHTML = minutosRestantes;
    Segundos.innerHTML = segundosRestantes;
}

setInterval(contador, 1000);