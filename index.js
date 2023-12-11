const sumMultiples = (number = 0) => {
    if (typeof number !== "number") return "Somente números são aceitos";
    if (number % 1 !== 0) return "Somente números inteiros";

    let sum = 0;
    const startingPoint = number - 1;

    for (let i = startingPoint; i > 0; i--) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
};
//Para mais testes o valor 11 pode ser alterado
console.log(sumMultiples(11));

module.exports = sumMultiples;
