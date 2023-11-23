import "./style.css";
import "./TypeScript/header";
import "./TypeScript/rules";
import "./TypeScript/whoWon";
import { renderHeaderElement } from "./TypeScript/header";
import { renderRules } from "./TypeScript/rules";
import { GameStaus } from "./TypeScript/type";
import { pickMoveElement, renderOptionElement } from "./TypeScript/pickMove";
import { whoWon } from "./TypeScript/whoWon";

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Game
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
let gameStatus: GameStaus = {
	isPicked: false,
	playerPick: "",
	computerPick: "",
	playerPoints: 0,
	computerPoints: 0,
};

const appElement = document.getElementById("app") as HTMLDivElement;
appElement.appendChild(renderHeaderElement());
appElement.appendChild(pickMoveElement());
appElement.appendChild(whoWon());
appElement.appendChild(renderRules());

const score = () => {
	const score = <HTMLParagraphElement>document.querySelector("header div p");
	gameStatus = { ...gameStatus };
	score.innerText = gameStatus.playerPoints.toString();
};
const pickEvents = () => {
	document.querySelectorAll(".choose").forEach(pickEl =>
		pickEl.addEventListener("click", () => {
			const option = pickEl.getAttribute("data-option");
			pick(option);
		})
	);
};
const pick = (option: string | null) => {
	gameStatus = { ...gameStatus, isPicked: true };
	computerPick();
	playerPick(option);
	changeState("showResult");
};
const computerPick = () => {
	const computerOption = ["Rock", "Paper", "Scissors"];
	const randomPick = Math.floor(Math.random() * computerOption.length);
	gameStatus = { ...gameStatus, computerPick: computerOption[randomPick] };
};
const playerPick = (pick: any) => {
	gameStatus = { ...gameStatus, playerPick: pick };
};
const changeState = (action: "showResult" | "resetGame") => {
	if (action === "showResult") {
		document.querySelector(".container")?.classList.add("hidden");
		document.querySelector(".whoWon")?.classList.remove("hidden");
	}
	if (action === "resetGame") {
		document.querySelector(".container")?.classList.remove("hidden");
		document.querySelector(".whoWon")?.classList.add("hidden");
	}
	showResult();
};
const showResult = () => {
	gameStatus = { ...gameStatus };
	const choices = document.querySelectorAll(".coin");
	const player = choices[0];
	const computer = choices[1];
	player.innerHTML = "";
	computer.innerHTML = "";
	player.appendChild(renderOptionElement(gameStatus.playerPick, "Relative"));
	computer.appendChild(
		renderOptionElement(gameStatus.computerPick, "Relative")
	);
	gameLogic();
};
const resetGame = () => {
	document.querySelector(".btnRestart")?.addEventListener("click", () => {
		changeState("resetGame");
	});
};

const gameLogic = () => {
	const resultText = <HTMLSpanElement>document.querySelector(".winner span");
	enum GameLogic {
		"Rock" = "Rock",
		"Paper" = "Paper",
		"Scissors" = "Scissors",
	}
	const { playerPick, computerPick } = gameStatus;
	if (playerPick === computerPick) resultText.innerText = "Draw";
	else if (
		(playerPick === GameLogic.Paper && computerPick === GameLogic.Rock) ||
		(playerPick === GameLogic.Rock && computerPick === GameLogic.Scissors) ||
		(playerPick === GameLogic.Scissors && computerPick === GameLogic.Paper)
	) {
		resultText.innerText = "You WIN!";
		gameStatus = { ...gameStatus, playerPoints: gameStatus.playerPoints + 1 };
	} else {
		resultText.innerText = "You LOSE :(";
		gameStatus = {
			...gameStatus,
			playerPoints: gameStatus.playerPoints - 1,
		};
	}
};
resetGame();
const init = () => {
	pickEvents();
};
init();
// game();
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
