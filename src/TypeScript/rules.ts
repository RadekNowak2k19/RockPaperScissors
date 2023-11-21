import { Rules } from "../assets/images";

export const renderRules = () => {
	let rules: string = "rules";
	const appElement = <HTMLDivElement>document.getElementById("app");
	const rulesButton = <HTMLButtonElement>document.createElement("button");
	const popupElement = <HTMLDivElement>document.createElement("div");
	const rulesElement = <HTMLDivElement>document.createElement("div");
	const rulesImage = <HTMLImageElement>document.createElement("img");
	const rulesHeader = <HTMLDivElement>document.createElement("div");
	const rulesText = <HTMLParagraphElement>document.createElement("p");
	const rulesClose = <HTMLButtonElement>document.createElement("button");

	rulesButton.classList.add("btn");
	popupElement.classList.add("popupBg");
	rulesElement.classList.add("rules");
	rulesHeader.classList.add("rulesHeader");
	rulesText.classList.add("rulesText");
	rulesClose.classList.add("close");

	rulesButton.innerText = rules.toLocaleUpperCase();
	rulesText.innerText = rules.toLocaleUpperCase();
	rulesClose.innerText = "X";
	rulesImage.src = Rules;

	appElement.appendChild(popupElement);
	popupElement.appendChild(rulesElement);
	rulesElement.appendChild(rulesHeader);
	rulesElement.appendChild(rulesImage);
	rulesHeader.appendChild(rulesText);
	rulesHeader.appendChild(rulesClose);

	return rulesButton;
};
