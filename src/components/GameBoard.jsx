import { useEffect, useState } from "react";

import GameCard from "./GameCard.jsx";

import fetchData from '../services/fetchData.js'
import shuffleArray from "../services/shuffleArray.js";



export default function GameBoard() {
	const [imageURLs, setImageURLs] = useState([]);

	useEffect(() => {
		(async () => {
			const data = await fetchData();
			setImageURLs(data);
		})();
	}, []);

	function handleFirstClick() {
		console.log('first click — shuffling images!');
		setImageURLs((prev) => shuffleArray(prev));
	}

	return (
		<div className="game-board grid-cols-4 grid gap-3 p-4 bg-pink-200">
			{imageURLs.map((url) => {
				//get the id of the pokemon (returned by api)
				const number = url.split('/').pop().split('.')[0];

				return <GameCard key={number} url={url} id={number} onFirstClick={handleFirstClick} />
			})}
		</div>
	);

}