let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = 0;


for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        odd = odd +1;
    }
}

if (odd > 0) {
    console.log(odd);
} else {
    console.log("nenhum valor encontrado");
}

