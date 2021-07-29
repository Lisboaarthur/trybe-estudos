//exercicio 1
let a = 2;
let b = 4;

console.log('soma: ' + (a + b));
console.log('subtração: ' + (a - b));
console.log('multiplicação: ' + (a * b));
console.log('divisão: ' + (a / b));
console.log('modulo: ' + (a % b));

//exercicio 2
let a = 5;
let b = 6;

if (a > b) {
  console.log("'a' é o maior numero");
} else if (b > a) {
  console.log("'b' é o maior numero");
};

//exercicio 3
let a = 20;
let b = 30;
let c = 40;

if (a > b && a > c) {
  console.log("'a' é o maior numero");
} else if (b > a && b > c) {
  console.log("'b' é o maior nuemro");
} else if  (c > a && c > b) {
  console.log("c é o maior numero");
}; 

//exercicio 4
let a = -9;

if (a > 0) {
  console.log("positivo");
} else if (a < 0) {
  console.log("negativo");
} else {
  console.log("zero");
}

//exercicio 5
let anguloA = 65;
let anguloB = 100;
let anguloC = 15;
let somaDosAngulos = anguloA + anguloB + anguloC;
let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosPositivos){
  if (somaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log("Erro: angulo inválido");
};

//exercicio 6 
