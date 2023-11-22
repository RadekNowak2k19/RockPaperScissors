import "./style.css";
import "./TypeScript/header";
import "./TypeScript/rules";
import "./TypeScript/whoWon";
import { renderHeaderElement } from "./TypeScript/header";
import { pickMoveElement } from "./TypeScript/pickMove";
import { renderRules } from "./TypeScript/rules";
import { whoWon } from "./TypeScript/whoWon";

interface GameStaus {
	isPicked: boolean;
}

let gameStatus: GameStaus = {
	isPicked: false,
};

const appElement = <HTMLDivElement>document.getElementById("app");
appElement.appendChild(renderHeaderElement());
appElement.appendChild(gameStatus.isPicked ? whoWon() : pickMoveElement());
appElement.appendChild(renderRules());

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Game
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Events
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const buttonRulesElement = <HTMLButtonElement>document.querySelector(".btn");
const rulesElement = <HTMLDivElement>document.querySelector(".popupBg");
const closeElement = <HTMLButtonElement>document.querySelector(".close");

buttonRulesElement.addEventListener("click", () => {
	rulesElement.classList.add("active");
});
closeElement.addEventListener("click", () => {
	if (rulesElement.classList.contains("active"))
		rulesElement.classList.remove("active");
});
window.addEventListener("keydown", (e: KeyboardEvent) => {
	if (e.key === "Escape") rulesElement.classList.remove("active");
	else return;
});
