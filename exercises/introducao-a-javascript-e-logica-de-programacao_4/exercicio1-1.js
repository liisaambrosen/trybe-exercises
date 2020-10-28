let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
  };

  // console.log('Bem vinda, ' + info.personagem);

let infoDois = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain",
    nota: "O último McPatinhas",
    recorrente: "Sim"
}

// console.log(info);

//for (let key in info) {
//    console.log(key);
//}

for (let properties in info) {
if (info[properties] === info.recorrente &&
    info[properties] === "Sim" &&
    infoDois[properties] === "Sim") {
    console.log("Ambos recorrentes");
} else {
    console.log(info[properties] + " e " + infoDois[properties]);
}
}

