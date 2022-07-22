const users = [
    ['Nicole', 31],
    ['Chris', 33],
    ['Yaatree', 2],
    ['Sanne', 29],
    ['Henning', 38],
];

const maior = users.reduce((anterior, atual) => {
    return atual[1] > anterior[1] ? atual : anterior;
});

console.log(maior);