export default function ScoreBoard({ score, bestScore }) {
	return (
		<div className="">
			<div className="text-3xl font-semibold text-white">
				Score: {score}
			</div>
			<div className="text-xl text-gray-200">
				Your Personal Best: {bestScore}
			</div>
		</div>
	);
}