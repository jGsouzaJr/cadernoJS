//function declaration
function sayHi(){
  console.log("Vamos para cima")
}
// sayHi()

//Function expression
const showFood = function(){
  console.log('Somente Jeová')
}

// showFood()

// Argumentos, parâmetros e default parameters
const myFunc = function(nome){
  console.log('Oi, meu nome é '+ nome)
}

myFunc('José Geraldo')

// default parameters

const myFunc1 = function( nome = 'Jesus Cristo'){
  console.log('Oi, meu nome é '+ nome)
}

myFunc1()

// retornando valores
// const num = Number(prompt('Número'))
// const doube = function(){
//   let dob = num * 2   
//   return alert(`O dobro de ${num} é ${resuldob}`)
// }

// doube()

// const num = Number(prompt('Número'))
// const doube = function(){
//   let dob = num * 2 
//   return dob
// }
// const resuldob = doube()

// alert(`O dobro de ${num} é ${resuldob}`)