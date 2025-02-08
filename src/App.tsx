import { useCallback, useEffect, useState } from "react";
import "./style/reset.css";
import "./style/app.css";
import words from "./wordsList.json";
import { HangmanDrawing } from "./components/Hangman/HangmanDrawing";
import { HangmanWord } from "./components/Hangman/HangmanWord";
import { HangmanKeyboard } from "./components/Hangman/HangmanKeyboard";

function App() {
	const [wordToGuess, setWordToGuess] = useState(() => {
		return words[Math.floor(Math.random() * words.length)];
	});
	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
	const incorrectGuesses = guessedLetters.filter(
		(letter) => !wordToGuess.includes(letter)
	);

	const addGuessedLetter = useCallback(
		(letter: string) => {
			console.log({ letter, wordToGuess });
			if (guessedLetters.includes(letter)) return;
			setGuessedLetters((guessedLetters) => [...guessedLetters, letter]);
		},
		[guessedLetters]
	);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			const letter = event.key.toLowerCase();
			if (!letter.match(/^[a-z]$/)) return;
			event.preventDefault();
			addGuessedLetter(letter);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [guessedLetters]);

	return (
		<div className="container">
			<HangmanDrawing
				numberOfGuesses={incorrectGuesses.length}
			></HangmanDrawing>
			<HangmanWord
				word={wordToGuess}
				guessedLetters={guessedLetters}
			></HangmanWord>
			<HangmanKeyboard
				activeLetter={guessedLetters.filter((letter) =>
					wordToGuess.includes(letter)
				)}
				inactiveLetter={incorrectGuesses}
				addGuessedLetter={addGuessedLetter}
			></HangmanKeyboard>
		</div>
	);
}

export default App;
