function calculadoraIMC() {
    var p = 61
    var a = 1.50
    var imc = p / (a * a)
    console.log(
        "Resultando em um IMC de aproximadamente",
        imc.toFixed(1), "segundo a tabela, se o IMC está entre 25 e 29,9, enquadra-se como Sobrepeso."
    )
}
calculadoraIMC()

function calcularIMC(peso, altura) {
    let IMC = (peso / (altura ** 2))
    console.log(IMC.toFixed(2))
}
calcularIMC(61, 1.50)

function calculadoraTroco() {
    let compra = 74.88
    let pago = 100
    let troco = (pago - compra)
    console.log("O valor do troco é R$", troco.toFixed(2))
}
calculadoraTroco()

function calcTroco(pago, compra) {
    let troco = (pago - compra)
    console.log("O valor do troco é R$", troco.toFixed(2))
}
calcTroco(200, 74.88)

function caTroco() {
    let troco = 0
    let valorPago = 100
    let valorCompra = 50
    console.log("O valor do troco é R$", troco = valorPago - valorCompra)
}
caTroco()

//array
function parOUimpar(numero) {
    let Resultando = ['par', 'impar']
    console.log(String(numero) + " é " + Resultando[numero % 2])
}
parOUimpar(23)
parOUimpar(10)

//com if/else
function parImpar() {
    let n1 = 19
    const divisor = 2
    const resto = 0
    let resultado = n1 % 2
    if (resultado === resto) {
        console.log("PAR")
    } else {
        console.log("IMPAR")
    }
    //TENARÍO ? = IF / : = ELSE
    //console.log(resultado === resto ? "PAR" : "IMPAR") 
}
parImpar()

function converterTemperatura(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    console.log(fahrenheit.toFixed(1));
}
converterTemperatura(26);

function agiota() {
    let juros = 0
    let valor = 1500
    let taxaJuros = 0.05
    let tempo = 6
    let m = 0
    console.log("O valor do juros é R$", juros = valor * taxaJuros * tempo, "O João tem que devolver R$", m = valor + juros)
}
agiota()

function investimento() {
    let p = 2000
    let i = 0.03
    let t = 12
    let m = p * (1 + i) ** t
    console.log("o Saldo será de R$", m.toFixed(2))
}
investimento()

function idade() {
    let idade = 18
    let maior = 18
    if (idade > maior) {
        console.log("já pode ser preso uhuul")
    } else if(idade === maior){
    console.log("18 certinho ein")
    }else {
        console.log("sai fora menorzin")
    }
    //console.log(idade >= maior ? "já pode ser preso uhuul" : "sai fora menorzin 🖕" )
}
idade()
