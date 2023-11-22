import { Option, Postion } from "./type";
import { renderOptionElement } from "./pickMove";

export const whoWon = () => {
	const whoWonElement = <HTMLDivElement>document.createElement("div");
	const displayWinnerElement = <HTMLDivElement>document.createElement("div");
	const spanElement = <HTMLSpanElement>document.createElement("span");
	const buttonElement = <HTMLButtonElement>document.createElement("button");

	whoWonElement.classList.add("whoWon");
	displayWinnerElement.classList.add("winner");
	buttonElement.classList.add("btnRestart");

	spanElement.innerText = "you won";
	buttonElement.innerText = "play again";

	whoWonElement.appendChild(renderChoice("YOU PICKED", "Paper", "Relative"));
	whoWonElement.appendChild(displayWinnerElement);
	displayWinnerElement.appendChild(spanElement);
	displayWinnerElement.appendChild(buttonElement);
	whoWonElement.appendChild(
		renderChoice("THE HOUSE PICKED", "Paper", "Relative")
	);

	return whoWonElement;
};

const pickText = (text: string) => {
	const textParagraph = <HTMLParagraphElement>document.createElement("p");
	textParagraph.innerText = text;
	return textParagraph;
};
const renderChoice = (text: string, type: Option, position: Postion) => {
	const displayChoiceElement = <HTMLDivElement>document.createElement("div");
	displayChoiceElement.classList.add("renderChoice");
	displayChoiceElement.appendChild(pickText(text));
	displayChoiceElement.appendChild(renderOptionElement(type, position));

	return displayChoiceElement;
};
