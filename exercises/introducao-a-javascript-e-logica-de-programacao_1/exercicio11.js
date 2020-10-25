let salarioBruto = 3216.20;
let aliquotaIR;
let aliquotaINSS;

if (salarioBruto <=1556.94) {
    aliquotaIR = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    aliquotaIR = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    aliquotaIR = salarioBruto * 0.11;
} else {
    aliquotaIr = 570.88;
}

salarioDois = salarioBruto - aliquotaIR;

if (salarioDois <= 1903.98) {
    aliquotaIR = 0;
} else if (salarioDois <= 2826.65) {
    aliquotaIR = (salarioDois * 0.075) - 142.8;
} else if (salarioDois <= 3751.05) {
    aliquotaIR = (salarioDois * 0.15) - 354.8;
} else if (salarioDois <= 4664.68) {
    aliquotaIr = (salarioDois * 0.225) - 636.13;
} else {
    aliquotaIr = (salarioDois * 0.275) - 869.36;
}

console.log("Salário: " + (salarioDois - aliquotaIR));