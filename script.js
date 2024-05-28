// Função para calcular o IMC
function calcularIMC() {
    // Obtém os valores dos campos de entrada
    var altura = parseFloat(document.getElementById("altura").value) / 100; // Converte a altura para metros
    var peso = parseFloat(document.getElementById("peso").value);
    var genero = document.getElementById("genero").value;

    // Verificação para campos vazios
    if (isNaN(altura) || isNaN(peso) || genero === "") {
        document.getElementById("resultado").innerHTML = "Por favor, preencha todos os campos.";
        return; // Impede o cálculo
    }

    // Calcula o IMC
    var imc = peso / (altura * altura);
    var resultado = document.getElementById("resultado");

    // Determina o status com base no IMC
    var status = "";
    if (imc < 18.5) {
        status = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        status = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        status = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        status = "Obesidade Grau I";
    } else if (imc >= 35 && imc < 40) {
        status = "Obesidade Grau II (obesidade severa)";
    } else if (imc >= 40) {
        status = "Obesidade Grau III (obesidade mórbida)";
    }

    // Sugestões com base no status
    var sugestao = "";
    if (status === "Abaixo do peso") {
        sugestao = "Você está abaixo do peso ideal. Tente ganhar um pouco de peso mantendo uma alimentação saudável e praticando exercícios físicos.";
    } else if (status === "Peso normal") {
        sugestao = "Parabéns! Seu peso está dentro da faixa considerada saudável. Continue mantendo uma alimentação equilibrada e praticando exercícios regularmente.";
    } else if (status === "Sobrepeso") {
        sugestao = "Você está um pouco acima do peso ideal. Tente perder um pouco de peso mantendo uma alimentação equilibrada e praticando exercícios regularmente.";
    } else if (status === "Obesidade Grau I") {
        sugestao = "Você está acima do peso ideal. Tente perder peso mantendo uma alimentação equilibrada e praticando exercícios regularmente.";
    } else if (status === "Obesidade Grau II (obesidade severa)") {
        sugestao = "Você está bem acima do peso ideal. Procure um nutricionista e tente perder peso mantendo uma alimentação equilibrada e praticando exercícios regularmente.";
    } else {
        sugestao = "Você está muito acima do peso ideal. Procure um nutricionista e tente perder peso mantendo uma alimentação equilibrada e praticando exercícios regularmente.";
    }

    // Exibe o resultado e a sugestão
    resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " - " + status + "<br><br>" + sugestao;
}

// Função para limpar os campos de entrada (exceto o gênero) e o resultado
function limparIMC() {
    // Obtém os campos de entrada
    var campoAltura = document.getElementById("altura");
    var campoPeso = document.getElementById("peso");
    var campoResultado = document.getElementById("resultado");

    // Limpa os campos de entrada (exceto o gênero)
    campoAltura.value = "";
    campoPeso.value = "";
    campoResultado.innerHTML = "";

    // Coloca o cursor no campo de altura
    campoAltura.focus();
}

// Coloca o cursor no campo de altura ao carregar a página
window.onload = function() {
    document.getElementById("altura").focus();
}
