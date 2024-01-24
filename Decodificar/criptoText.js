function criptografar() {
    var textoOriginal = document.getElementById("text-input").value;
    var chave = 3; // Número de posições para deslocar (pode ser ajustado)
    var textoCriptografado = cifraCesar(textoOriginal, chave);
    document.getElementById("result-area").value = textoCriptografado;
}

function descriptografar() {
    var textoCriptografado = document.getElementById("text-input").value;
    var chave = 3; // Número de posições para deslocar (deve ser o mesmo usado na criptografia)
    var textoOriginal = cifraCesar(textoCriptografado, -chave);
    document.getElementById("result-area").value = textoOriginal;
}

function cifraCesar(texto, chave) {
    return texto.replace(/[a-zA-Z]/g, function (letra) {
        var codigo = letra.charCodeAt(0);
        var maiuscula = letra === letra.toUpperCase();
        var letraDeslocada = String.fromCharCode((codigo - (maiuscula ? 65 : 97) + chave + 26) % 26 + (maiuscula ? 65 : 97));
        return letraDeslocada;
    });
}
