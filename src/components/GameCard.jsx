import { useState } from "react";

function handleGameCardClick(clicked, setClicked) {
	if (!clicked) {
		console.log('first click')
		setClicked(true);
	} else {
		console.log('already clicked');
	}
}

export default function GameCard({ url, id }) {
	const [clicked, setClicked] = useState(false);

	return (
		<div className="image-container bg-amber-200 p-3 flex justify-center h-[200px]" onClick={() => {
			handleGameCardClick(clicked, setClicked);
		}}>
			<img src={url} alt={`pokemon-index-${id}`} className="h-[130px]" />
		</div>
	);
}