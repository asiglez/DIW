document.addEventListener("DOMContentLoaded", function () {
    const fondo = document.getElementById("pagina");
    const colores = ["orange", "red", "blue", "green", "yellow"];
    const colorestexto = ["white", "black", "white", "black", "white"];
    let indice = 0;

    document.addEventListener("click", function () {
        indice = (indice + 1) % colores.length;
        fondo.style.backgroundColor = colores[indice];
        fondo.style.color = colorestexto[indice];
    })
});
