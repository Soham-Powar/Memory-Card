// GameCard.jsx
import { useState } from "react";

export default function GameCard({ url, id, onFirstClick, setScore, setBestScore, score, bestScore }) {
	const [clicked, setClicked] = useState(false);

	function handleClick() {
		if (!clicked) {
			setClicked(true);

			const newScore = score + 1;
			setScore(newScore);

			if (bestScore <= newScore) {
				setBestScore(newScore);
			}

			onFirstClick(); //to shuffle - method from parent(GameBoard)
		} else {
			alert('You lose son.');
			setScore(0);
		}
	}

	return (
		<div
			className="image-container bg-amber-200 p-3 flex justify-center h-[200px]"
			onClick={handleClick}
		>
			<img src={url} alt={`pokemon-index-${id}`} className="h-[130px]" />
		</div>
	);
}
