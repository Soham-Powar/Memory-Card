// GameCard.jsx
import { useState } from "react";

export default function GameCard({ url, id, onFirstClick }) {
	const [clicked, setClicked] = useState(false);

	function handleClick() {
		if (!clicked) {
			setClicked(true);
			onFirstClick();
		} else {
			console.log('already clicked');
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
