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
let peçaDeXadres = "bispo";

switch (peçaDeXadres.toLowerCase()){
  case "rei":
    console.log("Rei -> Uma casa em cada direção.");
    break;
  case "bispo":
    console.log("Bispo -> Diagonal.");
    break;
  case "rainha":
    console.log("Rainha -> Horizontal, Diagonal e Vertical.");
    break;
  case "cavalo":
    console.log("Cavalo -> L");
    break;
  case "torre":
    console.log("Torre -> Horizontal e Vertical");
    break;
  case "peão":
    console.log("Peão -> Uma casa para frente, no primeiro movimento pode ser duas casas para frente");
    break;
  default:
    console.log("Erro, não é uma peça!");
    break;
};

//exercicio 7
let nota = 32;

if (nota < 0 || nota > 100){ 
  console.log("Erro, nota inválida!");
 } else if (nota >= 90) {
   console.log("A");
 } else if (nota >= 80) {
   console.log("B");
 } else if (nota >= 70) {
   console.log("C");
 } else if (nota >= 60) {
   console.log("D");
 } else if (nota >= 50) {
   console.log("E")
 } else if (nota < 50) {
   console.log("F")
 };

 //exercicio 8
 let a = 2;
 let b = 5;
 let c = 7;
 let isEven = false;

 if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
   isEven= true;
 };
 console.log(isEven);

//exercicio 9
 let a = 2;
 let b = 6;
 let c = 4;
 let isOdd = false;

 if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
   isOdd= true;
 };
 console.log(isOdd);

 //exercicio 10
 let custoProduto = 4
 let valorVenda = 6

 if (custoProduto >= 0 && valorVenda >= 0) {
   let custoTotalProduto = custoProduto * 1.2;
   let lucroTotal = (valorVenda - custoTotalProduto) * 1000;
   console.log(lucroTotal);
  } else { 
    console.log ("Erro, valores não podem ser negativos");
 };

//exercicio 11
let aliquotINSS;
let aliquotIR;

let grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));