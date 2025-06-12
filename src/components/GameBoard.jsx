import { useEffect, useState } from "react";

import GameCard from "./GameCard.jsx";

import fetchData from '../services/fetchData.js'

export default function GameBoard() {
	const [imageURLs, setImageURLs] = useState([]);
	useEffect(() => {
		(async () => {
			const data = await fetchData();
			setImageURLs(data);
		})();
	}, []);

	return (
		<div className="game-board grid-cols-4 grid gap-3 p-4 bg-pink-200">
			{imageURLs.map((url, index) => {
				//get the id of the pokemon (returned by api)
				const number = url.split('/').pop().split('.')[0];

				return <GameCard key={number} url={url} index={index} />
			})}
		</div>
	);

}