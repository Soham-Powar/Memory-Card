export default function ResetBtn({ fetchImages, setScore, resetAllCards }) {
	return (
		<button onClick={() => {
			resetAllCards();
			fetchImages();
			setScore(0);
		}}>Reset</button>
	);
}