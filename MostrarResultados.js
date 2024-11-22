function mostrarResultado(valorConvertido) {
    
    const resultDiv = document.getElementById("resultado");
    if (resultDiv) {
        
        document.getElementById("resultado").innerText=`La conversión es: ${valorConvertido.toFixed(2)}`;
    } else {
        console.error("El elemento con id 'resultado' no existe en el documento HTML.");
    }
}
function combertidor() {
    
    var valor1 = document.getElementById("valor1").value; 
    var valor2 = document.getElementById("valor2").value; 
    var base = parseFloat(document.getElementById("base").value); 
    
    if (isNaN(base) || base <= 0) {
        alert("Por favor, ingresa una cantidad válida.");
        return;
    }
    let tasa = 0;

    if (valor1 === "1" && valor2 === "1") {
        tasa = 1; 
    } else if (valor1 === "1" && valor2 === "2") {
        tasa = 1.05; 
    } else if (valor1 === "1" && valor2 === "3") {
        tasa = 4.0; 
    } else if (valor1 === "2" && valor2 === "1") {
        tasa = 0.96; 
    } else if (valor1 === "2" && valor2 === "2") {
        tasa = 1;
    } else if (valor1 === "2" && valor2 === "3") {
        tasa = 3.80; 
    } else if (valor1 === "3" && valor2 === "1") {
        tasa = 0.25; 
    } else if (valor1 === "3" && valor2 === "2") {
        tasa = 0.26; 
    } else if (valor1 === "3" && valor2 === "3") {
        tasa = 1; 
    } else {
        alert("Conversión no válida.");
        return;
    }

    
    var result = base * tasa;

    mostrarResultado(result);
}
