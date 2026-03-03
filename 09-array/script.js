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