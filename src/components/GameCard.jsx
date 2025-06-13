// GameCard.jsx
import { useState, useEffect } from "react";

export default function GameCard({ url, id, onFirstClick, setScore, setBestScore, score, bestScore, resetSignal, onLoss }) {
	const [clicked, setClicked] = useState(false);

	useEffect(() => {
		if (resetSignal) {
			setClicked(false);
		}
	}, [resetSignal]);

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
			onLoss();
		}
	}

	return (
		<div
			className="image-container bg-[radial-gradient(circle,_rgba(204,142,252,0)_0%,_rgba(204,142,252,0.2)_20%,_rgba(204,142,252,1)_100%)] p-3 flex justify-center h-[200px] border-2 border-[rgba(204,142,252,1)]"
			onClick={handleClick}
		>
			<img src={url} alt={`pokemon-index-${id}`} className="h-[130px]" />
		</div>
	);
}
