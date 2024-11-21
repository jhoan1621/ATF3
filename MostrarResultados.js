function mostrarResultado(valorConvertido) {
    const resultDiv = document.getElementById("result");
    if (resultDiv) {
        resultDiv.textContent = `El resultado de la conversión es: ${valorConvertido}`;
    } else {
        console.error("El elemento con id 'result' no existe en el documento HTML.");
    }
}
