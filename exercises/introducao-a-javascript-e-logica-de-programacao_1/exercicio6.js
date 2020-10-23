let chessPiece = "PQP";

chessPiece = chessPiece.toLowerCase();

switch (chessPiece) {
    case "rei":
        console.log("vertical, diagonal e horizontal");
        break;
    case "rainha":
        console.log("vertical, diagonal e horizontal mas não pula peças");
        break;
    case "bispo":
        console.log("diagonal e não pula peças");
        break;
    case "cavalo":
        console.log("move em L e pula peças");
        break;
    case "torre":
        console.log("vertical ou horizontal");
        break;
    case "peao":
        console.log("apenas 1 vez pra frente");
        break;
    default:
        console.log("peça não existe");
}