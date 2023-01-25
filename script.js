let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const chances = document.querySelector(".chances");
const ultimaTentativa = document.querySelector(".ultimaTentativa");
const menOumai = document.querySelector(".menOumai");
const env = document.querySelector(".env");
const campoTent = document.querySelector(".campoTent");
let cont = 1;
let resetar;

function checkT() {
    const usu = Number(campoTent.value);
    if (cont === 1) {
        chances.textContent = "Numeros digitados: ";
    }

    chances.textContent += usu + " ";

    if (usu === numeroAleatorio) {
        ultimaTentativa.textContent = "PARABÉNS! Você acertou!";
        ultimaTentativa.style.backgroundColor = "green";
        menOumai.textContent = "";
        setGameOver();
    } else if (cont === 10) {
        ultimaTentativa.textContent = "!!!GAME OVER!!!";
        menOumai.textContent = "";
        setGameOver();
    } else {
        ultimaTentativa.textContent = "Errado!";
        ultimaTentativa.style.backgroundColor = "red";
        if (usu < numeroAleatorio) {
            menOumai.textContent = "Tente um número maior";
        } else if (usu > numeroAleatorio) {
            menOumai.textContent = "Tente um número menor!";
        }
    }

    cont++;
    campoTent.value = "";
    campoTent.focus();
}

env.addEventListener("click", checkT);

function setGameOver() {
    campoTent.disabled = true;
    env.disabled = true;
    resetar = document.createElement("button");
    resetar.textContent = "Começar Novo Jogo";
    document.body.appendChild(resetar);
    resetar.addEventListener("click", resetGame);
}

function resetGame() {
    cont = 1;
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }

    resetar.parentNode.removeChild(resetar);
    campoTent.disabled = false;
    env.disabled = false;
    campoTent.value = "";
    campoTent.focus();
    ultimaTentativa.style.backgroundColor = "white";
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
