import './App.css';
import { useEffect, useState } from 'react';
import getPokemonImages from './services/fetchData'

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log(getPokemonImages());
    getPokemonImages().then(setImages);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {images.map((url, index) => (
        <img key={index} src={url} alt={`Pokemon ${index + 1}`} />
      ))}
    </div>
  );
}

export default App;
