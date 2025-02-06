document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("mostrar-mas");
    const textoCompleto = document.querySelector(".texto-completo");
    const alineacionBotones = document.querySelector(".botones");
    const contenido = document.querySelector(".contenido");

    boton.addEventListener("click", function () {
        if (textoCompleto.style.display === "none" || textoCompleto.style.display === "") {
            textoCompleto.style.display = "block";
            boton.textContent = "Mostrar menos";
            alineacionBotones.style.display = "block";
        } else {
            textoCompleto.style.display = "none";
            boton.textContent = "Mostrar más";
            alineacionBotones.style.display = "none";
        }
    });

    document.getElementById("izquierda").addEventListener("click", function () {
        contenido.style.textAlign = "left";
    });

    document.getElementById("centrada").addEventListener("click", function () {
        contenido.style.textAlign = "center";
    });

    document.getElementById("justificada").addEventListener("click", function () {
        contenido.style.textAlign = "justify";
    });
});