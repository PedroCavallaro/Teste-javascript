const sumMultiples = require(".");

it("retornar erro caso não seja passado um número", () => {
    expect(sumMultiples("asdasd")).toBe("Somente números são aceitos");
});
it("retornar erro caso não seja passado nada", () => {
    expect(sumMultiples(null)).toBe("Somente números são aceitos");
});
it("retonar erro caso o número seja do tipo float", () => {
    expect(sumMultiples(2.3)).toBe("Somente números inteiros");
});
