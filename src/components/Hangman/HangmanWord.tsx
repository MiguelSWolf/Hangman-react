import "./word.css";

type HangmanWordProps = {
	word: string;
	guessedLetters: string[];
};
export function HangmanWord({ word, guessedLetters }: HangmanWordProps) {
	return (
		<div className="word">
			{word.split("").map((letter, index) => {
				return (
					<div className="letter" key={index}>
						<span
							style={{
								visibility: guessedLetters.includes(letter)
									? "visible"
									: "hidden",
							}}
						>
							{letter}
						</span>
					</div>
				);
			})}
		</div>
	);
}
