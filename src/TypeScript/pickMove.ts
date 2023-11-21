import { Rock, Paper, Scissors } from "../assets/images";
export const pickMoveElement = () => {
	const containerElement = <HTMLElement>document.createElement("main");
	const pickElement = <HTMLDivElement>document.createElement("div");

	const traingle = `<svg width="313" height="278" xmlns="http://www.w3.org/2000/svg"><path stroke="#000" stroke-width="15" fill="none" opacity=".2" d="M156.5 262 300 8H13z"/></svg>`;

	containerElement.classList.add("container");
	pickElement.classList.add("pick");
	containerElement.appendChild(pickElement);
	pickElement.innerHTML = traingle;
	pickElement.appendChild(renderOptionElement("Rock"));
	pickElement.appendChild(renderOptionElement("Paper"));
	pickElement.appendChild(renderOptionElement("Scissors"));

	return containerElement;
};

type Option = "Rock" | "Paper" | "Scissors";
const renderOptionElement = (option: Option) => {
	const optionElement = <HTMLDivElement>document.createElement("div");
	const insideElement = <HTMLDivElement>document.createElement("div");
	const imageElement = <HTMLImageElement>document.createElement("img");

	insideElement.classList.add("inside");
	optionElement.appendChild(insideElement);
	insideElement.appendChild(imageElement);

	if (option === "Rock") {
		optionElement.classList.add("rock", "choose");
		imageElement.src = Rock;
	}
	if (option === "Paper") {
		optionElement.classList.add("paper", "choose");
		imageElement.src = Paper;
	}
	if (option === "Scissors") {
		optionElement.classList.add("scissors", "choose");
		imageElement.src = Scissors;
	}

	return optionElement;
};
