// Función para encriptar texto
function encriptar() {
    const textarea = document.getElementById('input-textarea');
    const outputH2 = document.getElementById('output-h2');
    const outputP = document.getElementById('output-p');
    const outputImg = document.getElementById('output-img');
    const copyButton = document.getElementById('copy-button');

    // Obtener el texto del textarea y encriptarlo
    let texto = textarea.value.toLowerCase();
    let textoEncriptado = texto.replace(/e/g, 'enter')
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');

    // Mostrar el texto encriptado
    outputH2.textContent = textoEncriptado;
    outputP.textContent = '';
    outputImg.style.display = 'none';

    // Mostrar el botón de copiar
    copyButton.style.display = 'block';

    // Limpiar el textarea
    textarea.value = '';
}

// Función para desencriptar texto
function desencriptar() {
    const textarea = document.getElementById('input-textarea');
    const outputH2 = document.getElementById('output-h2');
    const outputP = document.getElementById('output-p');
    const outputImg = document.getElementById('output-img');
    const copyButton = document.getElementById('copy-button');

    // Obtener el texto del textarea y desencriptarlo
    let texto = textarea.value.toLowerCase();
    let textoDesencriptado = texto.replace(/enter/g, 'e')
                                  .replace(/imes/g, 'i')
                                  .replace(/ai/g, 'a')
                                  .replace(/ober/g, 'o')
                                  .replace(/ufat/g, 'u');

    // Mostrar el texto desencriptado
    outputH2.textContent = textoDesencriptado;
    outputP.textContent = '';
    outputImg.style.display = 'none';

    // Mostrar el botón de copiar
    copyButton.style.display = 'block';

    // Limpiar el textarea
    textarea.value = '';
}

// Función para copiar texto
function copiarTexto() {
    const outputH2 = document.getElementById('output-h2');

    // Crear un elemento de texto temporal
    const tempInput = document.createElement('textarea');
    tempInput.value = outputH2.textContent;
    document.body.appendChild(tempInput);

    // Seleccionar y copiar el texto
    tempInput.select();
    document.execCommand('copy');

    // Eliminar el elemento temporal
    document.body.removeChild(tempInput);
}
