import "./keyboard.css";

type HangmanKeyboardProps = {
	activeLetter: string[];
	inactiveLetter: string[];
	addGuessedLetter: (letter: string) => void;
};

export function HangmanKeyboard({
	activeLetter,
	inactiveLetter,
	addGuessedLetter,
}: HangmanKeyboardProps) {
	const letters = "abcdefghijklmnopqrstuvwxyz".split("");
	return (
		<div style={{ alignSelf: "stretch" }}>
			<div className="keyboard">
				{letters.map((letter, index) => {
					const isActive = activeLetter.includes(letter);
					const isInactive = inactiveLetter.includes(letter);
					return (
						<button
							onClick={() => addGuessedLetter(letter)}
							className={`key ${isActive ? "is-active" : ""} ${
								isInactive ? "is-inactive" : ""
							}`}
							disabled={isActive || isInactive}
							key={index}
						>
							{letter}
						</button>
					);
				})}
			</div>
		</div>
	);
}
