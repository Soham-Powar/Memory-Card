export default function GameCard({ url, index }) {
	return (
		<div className="image-container bg-amber-200 p-3 flex justify-center h-[200px]">
			<img key={index} src={url} alt={`pokemon-index-${index}`} className="h-[130px]" />
		</div>
	);
}