import { useEffect, useState } from "react";

import GameCard from "./GameCard.jsx";
import ScoreBoard from "./ScoreBoard.jsx";
import ResetBtn from "./ResetBtn.jsx";

import fetchData from '../services/fetchData.js'
import shuffleArray from "../services/shuffleArray.js";

import loadingGif from '../assets/loading.gif'



export default function GameBoard() {
	const [imageURLs, setImageURLs] = useState([]);
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [resetSignal, setResetSignal] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchImages();
	}, []);

	async function fetchImages() {
		setLoading(true);
		const data = await fetchData();
		setImageURLs(data);
		setTimeout(() => {
			setLoading(false);
		}, 1200)
	}


	function handleFirstClick() {
		setImageURLs((prev) => shuffleArray(prev));
	}

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen text-xl font-semibold text-purple-600">
				<img src={loadingGif} alt="" />
				Loading...
			</div>
		);
	}

	function handleLoss() {
		setResetSignal(true);
		setScore(0);

		// allow all GameCards to reset before clearing the signal
		setTimeout(() => {
			setResetSignal(false);
		}, 100);
	}

	function resetAllCards() {
		setResetSignal(true);
		setTimeout(() => setResetSignal(false), 100); // Reset the signal
	}

	return (
		<>
			<div>
				<ScoreBoard score={score} bestScore={bestScore} />
				<ResetBtn
					fetchImages={fetchImages}
					setScore={setScore}
					resetAllCards={resetAllCards}
				/>
			</div>
			<div className="game-board grid-cols-4 grid gap-3 p-4">
				{imageURLs.map((url) => {
					//get the id of the pokemon (returned by api) to use it as key.
					const number = url.split('/').pop().split('.')[0];

					return (
						<GameCard
							key={number}
							url={url}
							id={number}
							score={score}
							bestScore={bestScore}
							setScore={setScore}
							setBestScore={setBestScore}
							resetSignal={resetSignal}
							onFirstClick={handleFirstClick}
							onLoss={handleLoss}
						/>
					);
				})}
			</div>
		</>
	);

}