/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/
// const num1 = Number(prompt('Número 1:'));
// const num2 = Number(prompt('Numero 2:'));

function mult(){
  if(num1 == 0 || num2 == 0){
    alert(`Todo número multiplicado por Zero é Zero`)
  } else if(num1 != 0 && num2 != 0){
    const mult = num1 * num2
    return alert(`A multiplicação de ${num1} e ${num2} é ${mult}`)
  }
}

// mult()

/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/
const div = function(){
  if(num2 === 0){   
    alert(`Não existe divisão por Zero!`)
  } else if (num2 != 0){
    let div = num1 / num2
  return alert(`A divisão entre o ${num1} e ${num2} é ${div}`)
  }   
}
// div()

/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/
const exibe =function (){
  let vez = 0
  for(let i = 0; i < num1; i++){
    if(vez === 7){
      break
    }
    vez++
    console.log(`Esta é a ${vez}ª vez que essa string é exibida.`)
  }
}
// exibe()

/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']


function arrPush(array = []){
  let newArray = []
  for(let i = 0; i<array.length; i++){
    const upperCase = array[i].toLocaleUpperCase()
    newArray.push(upperCase)
  }
  return newArray
}
console.log(arrPush(millennialWords))



/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]
let posiCounter = 0
let negCounter = 0
const positivo = function(number = 0){
  return number >= 0
}

for(let i = 0; i < randomNumbers.length; i++){
  if(positivo(randomNumbers[i])){
    posiCounter++
  } else{
    negCounter++
  }
}

  
  // console.log(`"O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${posiCounter} positivos e ${negCounter} negativos."`)
/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/
let numerosImpares = []
const getOddNumbers = function(numb = []){
  for(let i=0; i< numb.length; i++){
    if(numb[i]%2 === 1){
      numerosImpares.push(numb[i])
    }
  }  
  return numerosImpares
}


getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])
console.log(numerosImpares.sort())

/*
  07
  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]

let sentence = ''
for(let i = 0; i< functions.length; i++){
  sentence +=`${functions[i]()} `;
}
console.log(sentence)