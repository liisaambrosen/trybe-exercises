let valorCusto = 1000;
let valorVenda = 4500;
let custoTotal = valorCusto - (valorCusto * 0.2);
let lucro = valorVenda - custoTotal;

if (valorCusto > 0 | valorVenda > 0) {
    console.log(lucro);
} else {
    console.log("erro");
}

