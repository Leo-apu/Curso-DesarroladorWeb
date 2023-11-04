document.getElementById("suma").addEventListener("click", function () {
    if (!validarCampos()) return;
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 + num2;
    document.getElementById("resultado").textContent = resultado;
});

document.getElementById("resta").addEventListener("click", function () {
    if (!validarCampos()) return;
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 - num2;
    document.getElementById("resultado").textContent = resultado;
});

document
    .getElementById("multiplicacion")
    .addEventListener("click", function () {
    if (!validarCampos()) return;
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 * num2;
    document.getElementById("resultado").textContent = resultado;
});

document.getElementById('division').addEventListener('click', function() {
    if (!validarCampos()) return;
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (num2 !== 0) {
        const resultado = num1 / num2;
        document.getElementById('resultado').textContent = resultado.toFixed(4);
    } else {
        document.getElementById('resultado').textContent = "Error: División por cero";
    }
});

function validarCampos() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos en ambos campos.");
        return false;
    }

    return true;
}

document.getElementById('limpiar').addEventListener('click', function() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('resultado').textContent = "0";
});
