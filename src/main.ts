import "./style.css";
import "./TypeScript/header";
import "./TypeScript/rules";
import { renderHeaderElement } from "./TypeScript/header";
import { pickMoveElement } from "./TypeScript/pickMove";
import { renderRules } from "./TypeScript/rules";

const appElement = <HTMLDivElement>document.getElementById("app");
appElement.appendChild(renderHeaderElement());
appElement.appendChild(pickMoveElement());
appElement.appendChild(renderRules());

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
