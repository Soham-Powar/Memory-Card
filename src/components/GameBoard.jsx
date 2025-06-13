import { useEffect, useState } from "react";

import GameCard from "./GameCard.jsx";
import ScoreBoard from "./ScoreBoard.jsx";

import fetchData from '../services/fetchData.js'
import shuffleArray from "../services/shuffleArray.js";



export default function GameBoard() {
	const [imageURLs, setImageURLs] = useState([]);
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);

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
		<>
			<div>
				<ScoreBoard score={score} bestScore={bestScore} />
			</div>
			<div className="game-board grid-cols-4 grid gap-3 p-4 bg-pink-200">
				{imageURLs.map((url) => {
					//get the id of the pokemon (returned by api)
					const number = url.split('/').pop().split('.')[0];

					return <GameCard key={number} url={url} id={number} onFirstClick={handleFirstClick} setScore={setScore} setBestScore={setBestScore} score={score} />
				})}
			</div>
		</>
	);

}