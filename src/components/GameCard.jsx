// GameCard.jsx
import { useState } from "react";

export default function GameCard({ url, id, onFirstClick, setScore, setBestScore, score }) {
	const [clicked, setClicked] = useState(false);

	function handleClick() {
		if (!clicked) {
			setClicked(true);
			setScore(score + 1);
			onFirstClick();
		} else {
			alert('You lose son.')
			setScore(0);
			setBestScore(score);
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
