document.addEventListener("DOMContentLoaded", function () {
    const estado = document.getElementById("estado");
    const keyValue = document.getElementById("keyValue");
    const codeValue = document.getElementById("codeValue");

    document.addEventListener("keydown", function (event) {
        estado.textContent = "Tecla pulsada";
        keyValue.textContent = event.key;
        codeValue.textContent = event.code;

        estado.style.color = "green";
    })

    document.addEventListener("keyup", function () {
        estado.textContent = "Tecla liberada";

        estado.style.color = "red";
    })
});