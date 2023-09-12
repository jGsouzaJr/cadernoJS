// Strings 
const Hello = 'Hello World';
console.log('a const Hello é do tipo:',typeof(Hello));

// concatenação de strings
const firsName = 'José Geraldo';
const lastName = 'Souza Júnior';
const fullName = firsName + ' ' + lastName
console.log(fullName);

// acessando caracteres 
console.log(fullName[0]);

// comprimento de uma string
console.log(fullName.length);

// métodos de string

console.log(fullName.toLocaleUpperCase());
console.log(fullName.toLocaleLowerCase());
console.log(fullName.charCodeAt())


// métodos comuns de strings 
const email = 'jgsouzadevweb@gmail.com'
const lastIndexOfA = email.lastIndexOf('s')
console.log(lastIndexOfA)

// quando desejamos pegar um pedaço de uma string
const slice = email.slice(0,13)
console.log('slice:',slice)

// quando desejamos substituir um caracter
const sub = email.replace('souza', '')
console.log('replace:',sub)

// métodos com Number
// inteiros e decimais
const radius = 10;
const pi = 3.14;

// operadores aritméticos
const area = pi * radius ** 2
console.log(area);

// ordem de operações 
