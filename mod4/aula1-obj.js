// criando um objeto literal

let user = {
  name: "José Geraldo",
  lastName: 'Souza Júnior',
  ebook:['1822', 'Lógica de Programação', 'Bíblia']
}

console.log(user.ebook[0])

user.age  = 33
user['dress'] = 'Rua: Osvaldo,9000'
console.log(user)

console.log(user)

user.ebook.pop()
console.log(user.ebook)

user['profissao'] = 'Desenvolvedor'

let key = 'profissao'

console.log(user[key])

let souEu = {
  nome: 'Júnior',
  age: 33,
  login:() =>{
    console.log('Usuário logado')
  },
  logout: ()=>{
    console.log("Foi para não sei onde!")
  }
}

souEu.login()