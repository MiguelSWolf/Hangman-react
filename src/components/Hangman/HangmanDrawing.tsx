import "./hangman.css";
const HEAD = <div className="head"></div>;
const BODY = <div className="body"></div>;
const LEFT_ARM = <div className="arm is-left"></div>;
const RIGHT_ARM = <div className="arm is-right"></div>;
const LEFT_LEG = <div className="leg is-left"></div>;
const RIGHT_LEG = <div className="leg is-right"></div>;
const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

type HangmanDrawingProps = {
	numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
	return (
		<div className="hangman">
			<div className="beam short"></div>
			<div className="pole"></div>
			<div className="beam"></div>
			<div className="rope"></div>
			<div className="man">{BODY_PARTS.slice(0, numberOfGuesses)}</div>
		</div>
	);
}
