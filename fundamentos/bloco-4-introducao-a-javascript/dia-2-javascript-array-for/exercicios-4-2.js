//exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
};

//exercicio 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let results = 0;

for (let index = 0; index < numbers.length; index += 1) {
    results += numbers[index];
}
console.log(results);

//exercicio 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let results = 0;

for (let index = 0; index < numbers.length; index += 1) {
    results += numbers[index];
}
let media = results / numbers.length;
console.log(media);

//exercicio 4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let results = 0;

for (let index = 0; index < numbers.length; index += 1) {
    results += numbers[index];
}
let media = results / numbers.length;

if (media > 20) { 
    console.log("valor maior que 20");
} else {
    console.log("valor menor que 20")
};

//exercicio 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }
};
console.log(maiorNumero);

//exercicio 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
let impares = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !==0) {
        impares.push(numbers[index]);
    }
};

if (impares.length === 0) {
    console.log("nenhum numero impar encontrado");
} else { 
    console.log(impares.length);    
};

//exercicio 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index];
    }
};
console.log(menorNumero);

//exercicio 8 e 9
let numeros = [];

for (let index = 1; index <= 25; index += 1){
    numeros.push(index)
}; 
console.log(numeros);

for (let index = 0; index < numeros.length; index += 1) {
    console.log(numeros[index] / 2);
};

