function calcularIMC(){
    //Entrada de Dados
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value.replace(",",".")); //adicionado o replace para padronizar a virgula em ponto

    //Processamento de Dados
        //Formula IMC: IMC = peso / (altura x altura)
    let imc = peso / (altura * altura);

    if(imc <= 20){
        categoria = "Abaixo do peso ideal. Considere procurar um especialista."
    }
    else if( imc > 21 && imc <= 28){
        categoria = "Dentro do peso ideal."
    }else{
        categoria = "⚠️ Sobrepeso. Considere procurar um especialista."
    }

    //Saída de Dados
    document.getElementById("resultadoIMC").textContent = "O seu IMC é: " + imc.toFixed(2); //Usei o toFIxed() para deixar duas casas decimais
    document.getElementById("categoriaIMC").textContent = "Sua categoria é: " + categoria ;
}