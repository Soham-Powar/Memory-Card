export default function ResetBtn({ fetchImages, setScore }) {
	return (
		<button onClick={() => {
			fetchImages();
			setScore(0);
		}}>Reset</button>
	);
}