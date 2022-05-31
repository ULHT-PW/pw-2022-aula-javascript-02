
if (! localStorage.getItem('contador')) {
    localStorage.setItem('contador', 0);
}


function contar() {
    
    contador = localStorage.getItem('contador');
    const heading = document.querySelector('#contador');
    ++contador;
    heading.innerHTML = contador;
    localStorage.setItem('contador', contador);
}


document.addEventListener('DOMContentLoaded', function () {

    contador = localStorage.getItem('contador');
    const heading = document.querySelector('#contador');
    heading.innerHTML = contador;

    document.querySelector('button').onclick = contar;

    setInterval(contar, 1000);

});