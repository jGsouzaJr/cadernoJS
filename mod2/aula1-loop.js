// for loop 

for (let i = 1; i <= 10; i++){
  // console.log(`Dentro do loop: ${i}`);
}

// console.log('Finalizado');

const names = ['Jose', 'Geraldo', 'Souza', 'Júnior', 'Débora', 'Silva', 'Rosário'];

for(let i = 0; i < names.length; i++){
  // console.log(names[i]);
  const HTMLTemplate = `<p>${names[i]}</p>`
  // console.log(HTMLTemplate)
}

//While loop
let a = 0
while(a<5){
  console.log(`While loop: ${a}`)
  a++
}

while(a<names.length){
  console.log(`${names[a]}`)
  a++
}