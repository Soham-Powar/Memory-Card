export default function ResetBtn({ fetchImages, setScore, resetAllCards }) {
	function handleReset() {
		resetAllCards();

		setScore(0);

		setTimeout(() => {
			fetchImages(); // load new images
		}, 100);
	}

	return (
		<button
			className="px-4 py-2 bg-blue-400 text-black font-semibold rounded"
			onClick={handleReset}
		>
			Reset
		</button>
	);
}
