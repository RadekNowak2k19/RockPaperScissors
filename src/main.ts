import "./style.css";
import "./TypeScript/header";
import { renderHeaderElement } from "./TypeScript/header";
import { pickMoveElement } from "./TypeScript/pickMove";

const appElement = <HTMLDivElement>document.getElementById("app");
appElement.appendChild(renderHeaderElement());
appElement.appendChild(pickMoveElement());
