export const renderHeaderElement = () => {
	const headerElemenet = <HTMLHeadElement>document.createElement("header");
	const titleElement = <HTMLHeadingElement>document.createElement("h1");
	const scoreElement = <HTMLDivElement>document.createElement("div");
	const scoreSpanElement = <HTMLSpanElement>document.createElement("span");
	const pointsElemnet = <HTMLParagraphElement>document.createElement("p");

	headerElemenet.appendChild(titleElement);
	headerElemenet.appendChild(scoreElement);

	titleElement.appendChild(renderElements("ROCK"));
	titleElement.appendChild(renderElements("PAPER"));
	titleElement.appendChild(renderElements("SCISSORS"));

	scoreElement.appendChild(scoreSpanElement).innerText = "Score";
	scoreElement.appendChild(pointsElemnet).innerText = "0";

	return headerElemenet;
};

const renderElements = (text: string) => {
	const spanEl = <HTMLSpanElement>document.createElement("span");
	spanEl.innerText = text;
	return spanEl;
};
