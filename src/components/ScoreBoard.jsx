export default function ScoreBoard({ score, bestScore }) {
	return (
		<div className="">
			<div className="text-3xl font-semibold text-gray-800">
				Score is {score}
			</div>
			<div className="text-xl text-gray-600">
				Best score is {bestScore}
			</div>
		</div>
	);
}