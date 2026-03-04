// array

const nomes = ["João", "Maria", "José"];

console.log(nomes);
console.log(nomes[0]);

//adicionando um elemento no array
nomes.push("Beatriz");
console.log(nomes); 

//removendo o último elemento do array 
nomes.pop();
console.log("Beatriz foi removida " + nomes);

//alterar um elemento do array
nomes[0]= "João Victor";
console.log(nomes);

//concatenar dois arrays
const numeros = [6, 7, 8]
console.log(numeros.length);

const outrosNumeros = [3, 9, 2];
const juncaoNumeros = numeros.concat(outrosNumeros);
console.log(juncaoNumeros)

//removendo o primeiro elemento do array
const nomesNovos = ["Joaquina", "Felipe", "Plínio"];

const primeiroNome = nomesNovos.shift();
console.log(nomesNovos[0]);


//Adicionar um ou mais elementos no início do array
const numerosTeste = [1, 2, 3];

numerosTeste.unshift(0);
console.log(numerosTeste);

//Encontrar a primeira ocorrêNCIA do elemento especificado
const frutas = ["maçã", "banana", "manga", "abacaxi"];

console.log(frutas.indexOf("maçã"));
console.log(frutas.indexOf("laranja"));

//encontrar a último ocorrência do elemento especificado
const letras = ["a", "b", "c", "a", "d"];

console.log(letras.lastIndexOf("a"));
console.log(letras.lastIndexOf("b"));
console.log(letras.lastIndexOf("z"));

//Verifica se um elemento está presente no array 

const frutasDona =  ["maçã", "banana", "laranja"];

const temMaca = frutasDona.includes("maçã");
const temMelancia = frutasDona.includes("melancia");
console.log(temMaca);
console.log(temMelancia)

//includes á partir de uma posição
const letrasNovo = ["a", "b", "c", "d", "a"];
const temAPos2 = letrasNovo.includes("a", 2);
console.log(temAPos2);


//revertendo array
const testandoReserve = [1, 2, 3, 4, 5];

testandoReserve.reverse();
console.log(testandoReserve);

//invertendo a ordem do array
const testandoSpread = ["a", "b", "c", "d", "e"];
console.log(testandoSpread);

const novaLetras = [...testandoSpread].reverse();
console.log(novaLetras);

//converte todas as letras de uma string para maiúsculas 
const fraseA = "Boas vindas!";
const upper = fraseA.toUpperCase();
console.log(upper);

//converte todas as letras de uma string para minúsculas
const fraseB = " QUE LEGAL!";
const lower = fraseB.toLocaleLowerCase();
console.log(lower);