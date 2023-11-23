import { Option, Postion } from "./type";
import { renderOptionElement } from "./pickMove";

export const whoWon = () => {
	const whoWonElement = <HTMLDivElement>document.createElement("div");
	const displayWinnerElement = <HTMLDivElement>document.createElement("div");
	const spanElement = <HTMLSpanElement>document.createElement("span");
	const buttonElement = <HTMLButtonElement>document.createElement("button");

	whoWonElement.classList.add("whoWon", "hidden");
	displayWinnerElement.classList.add("winner");
	buttonElement.classList.add("btnRestart");

	spanElement.innerText = "";
	buttonElement.innerText = "play again";

	whoWonElement.appendChild(
		renderChoice("YOU PICKED", "Paper", "Relative", "player")
	);
	whoWonElement.appendChild(displayWinnerElement);
	displayWinnerElement.appendChild(spanElement);
	displayWinnerElement.appendChild(buttonElement);
	whoWonElement.appendChild(
		renderChoice("THE HOUSE PICKED", "Rock", "Relative", "computer")
	);

	return whoWonElement;
};

const pickText = (text: string) => {
	const textParagraph = <HTMLParagraphElement>document.createElement("p");
	textParagraph.innerText = text;
	return textParagraph;
};
export const renderChoice = (
	text: string,
	type: Option,
	position: Postion,
	who: string
) => {
	const displayChoiceElement = <HTMLDivElement>document.createElement("div");
	const coinElement = document.createElement("div");
	displayChoiceElement.classList.add("renderChoice");
	coinElement.classList.add("coin");
	displayChoiceElement.appendChild(pickText(text));
	displayChoiceElement.appendChild(coinElement);
	coinElement.appendChild(renderOptionElement(type, position));
	displayChoiceElement.setAttribute("datasetWho", who);

	return displayChoiceElement;
};
