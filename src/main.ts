import "./style.css";
import "./TypeScript/header";
import { renderHeaderElement } from "./TypeScript/header";

const appElement = <HTMLDivElement>document.getElementById("app");
appElement.appendChild(renderHeaderElement());
