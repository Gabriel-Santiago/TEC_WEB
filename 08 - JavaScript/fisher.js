// Questão 1
function verificaArray(entrada){
    return Array.isArray(entrada);
}

// Questão 2
function clonaArray(entrada){
    return entrada.slice();
}

// Questão 3
function obterPrimeirosElementos(arr, n=1){
    return arr.slice(0,n);
}

// Questão 4
function obterUltimoosElementos(arr, n=1){
    return arr.slice(-n);
}

//Questão 5
let meuArray = ["Olá", "mundo", "JavaScript!"];
let resultado = meuArray.join(" ");

// Questão 6
function inserirTracosEntrePares(numero) {
  let numeroString = numero.toString();
  let resultado = "";

  for (let i = 0; i < numeroString.length; i++) {
    resultado += numeroString[i];

    if (numeroString[i] % 2 === 0 && numeroString[i + 1] % 2 === 0) {
      resultado += "-";
    }
  }

  return resultado;
}

// Questão 7
function maisFrequente(array) {
    let contador = {};
    let itemMaisFrequente;
    let frequenciaMaxima = 0;
  
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      contador[item] = (contador[item] || 0) + 1;
  
      if (contador[item] > frequenciaMaxima) {
        frequenciaMaxima = contador[item];
        itemMaisFrequente = item;
      }
    }
  
    return itemMaisFrequente;
}

// Questão 8
function removerItensDuplicados(array) {
    let itensUnicos = [];
  
    for (let i = 0; i < array.length; i++) {
      let itemAtual = array[i].toLowerCase();
  
      if (!itensUnicos.includes(itemAtual)) {
        itensUnicos.push(itemAtual);
      }
    }
  
    return itensUnicos;
}

// Questão 9
function somaDeIndices(array1, array2) {
    let resultado = [];
  
    for (let i = 0; i < array1.length; i++) {
      let soma = array1[i] + array2[i];
      resultado.push(soma);
    }
  
    return resultado;
}

// Questão 10
let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];
console.log("Vetor Pilha antes da adição: " + vetorPilha);

for (let i = 0; i < vetorAdiciona.length; i++) {
  vetorPilha.push(vetorAdiciona[i]);
}
console.log("Vetor Pilha após a adição: " + vetorPilha);