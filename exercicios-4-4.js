//exercicio 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log("Bem vinda, " + info.personagem);

//exercicio 2
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info.recorrente = "Sim";
console.log(info);

//exercicio 3
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "Sim",
};

for (let key in info) {
    console.log(key);
};
//exercicio 4
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

for (let key in info) {
    console.log(info[key])
};

//exercicio 5
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
}

for (let properties in info) {
    if (
        properties === 'recorrente' &&
        info[properties] === 'Sim' &&
        info2[properties] === 'Sim'
    ) {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[properties] + ' e ' + info2[properties]);
    }
};