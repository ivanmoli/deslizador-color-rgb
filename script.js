let rojo = document.getElementById("rojo");

let verde = document.getElementById("verde");

let azul = document.getElementById("azul");


let valorRojo = document.getElementById("valor-r");

let valorVerde = document.getElementById("valor-v");

let valorAzul = document.getElementById("valor-a");


let valor = document.getElementsByClassName("valor")[0];


const generarColor = () => {

    let r = rojo.value;

    let g = verde.value;

    let b = azul.value;

    let rgb = `rgb(${r}, ${g}, ${b})`;

    valorRojo.innerHTML = r;

    valorVerde.innerHTML = g;

    valorAzul.innerHTML = b;

    valor.innerHTML = rgb;

    return rgb;

}

const cambiarFondo = () => {

    let color = generarColor();

    document.body.style.backgroundColor = color;
}

rojo.addEventListener("input", cambiarFondo);

verde.addEventListener("input", cambiarFondo);

azul.addEventListener("input", cambiarFondo);