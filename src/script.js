let nome = [];
let nivel = [];
let rank = [];

let heroiNome = prompt("Digite o nome do herói:");
if (!heroiNome || heroiNome.trim() === "") {
  alert("Nome inválido. Por favor, recarregue a página e digite um nome válido.");
} else {
  let heroiXP = parseInt(prompt("Digite a quantidade de experiência (XP) do herói:"));
  if (isNaN(heroiXP) || heroiXP < 0) {
    alert("XP inválido. Por favor, recarregue a página e digite um número válido.");
  } else {
    nome.push(heroiNome);
    nivel.push(heroiXP);

    if (heroiXP < 1000) {
      rank.push("Ferro");
    } else if (heroiXP >= 1001 && heroiXP <= 2000) {
      rank.push("Bronze");
    } else if (heroiXP >= 2001 && heroiXP <= 5000) {
      rank.push("Prata");
    } else if (heroiXP >= 5001 && heroiXP <= 7000) {
      rank.push("Ouro");
    } else if (heroiXP >= 7001 && heroiXP <= 8000) {
      rank.push("Platina");
    } else if (heroiXP >= 8001 && heroiXP <= 9000) {
      rank.push("Ascendente");
    } else if (heroiXP >= 9001 && heroiXP <= 10000) {
      rank.push("Ascendente");
    } else {
      rank.push("Imortal");
    }

    alert(`O herói de nome ${nome[0]} está com ${nivel[0]} de XP e está no rank: ${rank[0]}`);
  }
}