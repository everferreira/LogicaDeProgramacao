// Variáveis para armazenar o nome e a experiência do herói
let nomeHeroi = "Artemis"; // Substitua pelo nome desejado
let experienciaHeroi = 7500; // Substitua pelo valor desejado de XP

// Variável para armazenar o nível do herói
let nivelHeroi;

// Estrutura de decisão para classificar o nível do herói com base no XP
if (experienciaHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (experienciaHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (experienciaHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (experienciaHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (experienciaHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (experienciaHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (experienciaHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

// Exibir a mensagem com o nome e nível do herói
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
