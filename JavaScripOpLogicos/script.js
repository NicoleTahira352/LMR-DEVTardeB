


function NparImpar() {

    let verificar = parseInt(numero) % 2;
    if (verificar == 0) {
        alert("o n° " + numero + " é par")
    } else {
        alert("o n° " + numero + " é ímpar")
    }

    function operacao() {
        let nValor1 = parseInt(document.getElementById("nValor1").value);
        let nValor2 = parseInt(document.getElementById("nValor1").value);
        let operacao = parseInt(document.getElementById("nValor1").value);
        let resultado;
        switch (p0peracao) {
            case "+":
             resultado =  nValor1 + nValor2;
                break;
            case "-":
                resultado = nValor1 - nValor2;
                break;
            case "*":
                resultado = nValor1 * nValor2;
                break;
            case "/":
                if (nValor2 != 0) {
                    resultado = nValor1 + nValor2;
                } else {
                    alert("Não pode divisão por ZERO")
                }
                break;
            default:
                alert("Selecione o n° válidos")
                break;
        }
    }


}