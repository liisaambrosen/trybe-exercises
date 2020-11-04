
let palavra = "arara";
function verificaPalindromo (param) {
    for (let index = param.length -1; index >=0; index -= 1) {
        let contrario = '';
        contrario.push(param[index])
        if (contrario === param) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

verificaPalindromo(palavra)


//for (let index = palavra.length -1; index >=0; index -= 1) {
//    let contrario = [];
//    contrario.push(palavra[index]);
//    console.log(contrario);
// }
