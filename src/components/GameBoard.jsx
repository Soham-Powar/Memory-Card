import { useEffect, useState } from "react";

import GameCard from "./GameCard.jsx";
import ScoreBoard from "./ScoreBoard.jsx";
import ResetBtn from "./ResetBtn.jsx";

import fetchData from '../services/fetchData.js'
import shuffleArray from "../services/shuffleArray.js";



export default function GameBoard() {
	const [imageURLs, setImageURLs] = useState([]);
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [resetSignal, setResetSignal] = useState(false);

	useEffect(() => {
		fetchImages();
	}, []);

	async function fetchImages() {
		const data = await fetchData();
		setImageURLs(data);
	}


	function handleFirstClick() {
		setImageURLs((prev) => shuffleArray(prev));
	}


	return (
		<>
			<div>
				<ScoreBoard score={score} bestScore={bestScore} />
				<ResetBtn fetchImages={fetchImages} setScore={setScore} resetAllCards={() => setResetSignal(true)} />
			</div>
			<div className="game-board grid-cols-4 grid gap-3 p-4 bg-pink-200">
				{imageURLs.map((url) => {
					//get the id of the pokemon (returned by api) to use it as key.
					const number = url.split('/').pop().split('.')[0];

					return <GameCard key={number} url={url} id={number} onFirstClick={handleFirstClick} setScore={setScore} setBestScore={setBestScore} score={score} bestScore={bestScore} resetSignal={resetSignal} setResetSignal={setResetSignal} />
				})}
			</div>
		</>
	);

}