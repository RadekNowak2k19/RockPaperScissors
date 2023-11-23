import { Rock, Paper, Scissors } from "../assets/images";
import { Option, Postion } from "./type";
export const pickMoveElement = () => {
	console.log("PickMoveElement");
	const containerElement = <HTMLDivElement>document.createElement("div");
	const pickElement = <HTMLDivElement>document.createElement("div");

	const traingle = `<svg width="313" height="278" xmlns="http://www.w3.org/2000/svg"><path stroke="#000" stroke-width="15" fill="none" opacity=".2" d="M156.5 262 300 8H13z"/></svg>`;

	containerElement.classList.add("container");
	pickElement.classList.add("pick");
	containerElement.appendChild(pickElement);
	pickElement.innerHTML = traingle;
	pickElement.appendChild(renderOptionElement("Rock", "Absolute"));
	pickElement.appendChild(renderOptionElement("Paper", "Absolute"));
	pickElement.appendChild(renderOptionElement("Scissors", "Absolute"));

	return containerElement;
};
export const renderOptionElement = (
	option: Option,
	postion: Postion | null = null
) => {
	const optionElement = <HTMLDivElement>document.createElement("div");
	const insideElement = <HTMLDivElement>document.createElement("div");
	const imageElement = <HTMLImageElement>document.createElement("img");

	insideElement.classList.add("inside");
	optionElement.appendChild(insideElement);
	insideElement.appendChild(imageElement);

	optionElement.classList.add(`choosePosition${postion}`);

	if (option === "Rock") {
		optionElement.classList.add("rock", "choose");
		optionElement.setAttribute("data-option", "Rock");
		imageElement.src = Rock;
	}
	if (option === "Paper") {
		optionElement.classList.add("paper", "choose");
		optionElement.setAttribute("data-option", "Paper");
		imageElement.src = Paper;
	}
	if (option === "Scissors") {
		optionElement.classList.add("scissors", "choose");
		optionElement.setAttribute("data-option", "Scissors");
		imageElement.src = Scissors;
	}

	return optionElement;
};
