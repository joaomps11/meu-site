function validarEmail(email) {
    if (!email) return false;
    return email.includes("@") && email.includes(".");
}

function validarCampoVazio(valor) {
    return valor && valor.trim() !== "";
}

function limitarTexto(texto, limite) {
    if (!texto) return "";
    return texto.length > limite ? texto.substring(0, limite) : texto;
}

module.exports = {
    validarEmail,
    validarCampoVazio,
    limitarTexto
};
