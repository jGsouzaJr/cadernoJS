// Arrays
let arr = ['Batman', 'Coringa', 'Wolverine'];
const ages = [33, 18, 27, 40, 18];
const randomArray = ['Júnior', 'Débora', 33, 18];

//métodos de arrays

const joinHeroes = arr.join('-'); // concatena os lementos do array
const indexOf18 = ages.indexOf('18'); // mostra a primeira o corrência do número 18 no array
const moreHeroes = arr.concat(['Superman', 'Wolverine']); // coloca elementos dentro do array sem motificar o original
const pushHeroes = arr.push('Hulk', 'WomanCat') // colocar um elemento ao final do array e motivica o original
const popHeroes = arr.pop() // retira o último elemento do array e motifica o original


console.log(arr)