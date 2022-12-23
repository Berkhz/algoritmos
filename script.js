// 1) Solicitar o nome e o salário de uma pessoa. No final, apresente o nome e seu novo salário como aumento de 28,5%.

// Tipos de alert em JavaScript
// alert = Dispara uma mensagem de alerta na tela
// confirm = Dispara uma mensagem de confirmação na tela
// prompt = Dispara uma caixa de diálogo na tela

// document.getElementById("").innerHTML = Serve para mostrar resultado na tela

function solicitarNome () // Para invocar a função e testar utilize o comando -> console.log(solicitarNome())
{
    var taxa = 1.285
    var nome = prompt("Informe seu nome!")
    alert("Bem vindo " + nome + "!")
    var salario = prompt ("Por favor informe o seu salário!")

    if (salario < 0 || salario == false) {
        alert("Tente Novamente!")
    } else {
        salario = salario * taxa
        alert(nome + " seu salário agora é de: R$" + salario)
    };
};

// 2) Ler duas variáveis numérica, e apresentar a soma das mesmas, acumulando ou não em outra variável.

function lerVariaveis() // Para invocar a função e testar utilize o comando -> console.log(lerVariaveis())
{
    var x,y
    x = prompt ("Escreva um número para somar: ")
    y = prompt ("Escrea outro número: ")
    var soma = Number(x)+ Number(y);
    var acumuladora = soma + soma
    alert ("O resultado é: " + soma)
    console.log(repetir())

    function repetir()
    {
    confirm("Deseja continuar?");
    if (bool = true) {
        console.log(lerVariaveis);
        };
    };
};

//  3) AREA = (BASE x ALTURA) / 2. Área de um Triângulo

function areaTriangulo() // Para invocar a função e testar utilize o comando -> console.log(areaTriangulo())
{
    var base = prompt("Escreva o valor da base do triângulo: ");
    var altura = prompt("Agora escreva o valor da altura: ");
    var valor = Number(base) + Number(altura);
    alert ("A área do triângulo é de: " + valor / 2);
};

// 4) CAC = 3.1416 * R². Lembre-se que R² é o mesmo que (R * R). Área de um Círculo 

function areaCirculo() // Para invocar a função e testar utilize o comando -> console.log(areaCirculo())
{
    const pi = 3.1416
    var raio = prompt("Informe o raio do círculo: ");
    var resultado = pi * Number(Math.pow(raio, 2)); // Math.pow = recebe a base e multiplica o valor ao exponente
    alert ("A área de um círculo é de: " + resultado.toFixed(2)); // toFixed() = define a quantidade de casas decimais após a vírgula
}

// 5) CPC = 3.1416 * D, sendo que D = R + R. Perímetro de Círculo