export type Postion = "Relative" | "Absolute";
export type Option = "Rock" | "Paper" | "Scissors" | any;
export interface GameStaus {
	isPicked: boolean;
	playerPick: string;
	computerPick: string;
	playerPoints: number;
	computerPoints: number;
}
