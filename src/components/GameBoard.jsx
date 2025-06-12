import { useEffect, useState } from "react";
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
		<div className="game-board">
			{imageURLs.map((url, index) => {
				return <img key={index} src={url} alt={`pokemon-index-${index}`} />
			})}
		</div>
	);

}