export default function ScoreBoard({ score, bestScore }) {
	return (
		<div>
			<div>
				Score is {score}
			</div>
			<div>
				Best score is {bestScore}
			</div>
		</div>
	);
}