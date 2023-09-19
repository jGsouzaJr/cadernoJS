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

// myFunc('José Geraldo')

// default parameters

const myFunc1 = function( nome = 'Jesus Cristo'){
  console.log('Oi, meu nome é '+ nome)
}

// myFunc1()

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

//arrow function

const arrow = (num) =>{
  return num * 2
}

// console.log(arrow(6))

// arrow function simplificada

const simples = numb => numb % 2

// console.log(simples(3))

// funções são criadas 
const sayHello = () => 'oi'

const talking = sayHello()

// console.log(talking)

// métodos está associado ao objeto

// console.log(talking.toLocaleUpperCase())

//forEach e callbacks


//CALLBACK

// const myFunc3 = callback => {
//   const value = 77
//   callback(value)
// }

// myFunc3(number => console.log(number))


//forEach

const socialNet = ['youtube', 'twitter', 'instagram', 'facebook']

// socialNet.forEach((i, index, array)=>{
//   console.log(index, i, array)
// })

// ordem dos parametros do forEach: item, index, array
// i = item; index = index do item dentro do array; array = o próprio array 
const desacoplado = (i, index, array) => {
  console.log(index, i, array)
} 

socialNet.forEach(desacoplado)

// utilizando o forEach

const ul = document.querySelector('[data-js="ul"]')
let htmlTemp = ''
socialNet.forEach(rede=>{
  htmlTemp += `<li style='color: red'>${rede}</li>`
})

ul.innerHTML = htmlTemp