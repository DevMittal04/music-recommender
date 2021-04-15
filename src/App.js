import "./styles.css";
import { useState } from "react";
var musicDictionary = {
  hindi: [
    { name: "Kasoor", rating: "4.8/5" },
    { name: "Alag Aasmaan", rating: "4.5/5" }
  ],
  english: [
    { name: "Bohemain Rhapsody", rating: "5/5" },
    { name: "Galway Girl", rating: "4.5/5" }
  ],
  foreign: [
    { name: "Tu Canción", rating: "4.6/5" },
    { name: "Despacito", rating: "4/5" }
  ]
};

var musicGenre = Object.keys(musicDictionary);

export default function App() {
  const [suggestions, setSuggestions] = useState(
    musicDictionary[musicGenre[0]]
  );

  function buttonClickHandler(genre) {
    var selectedGenre = musicDictionary[genre];
    setSuggestions(selectedGenre);
  }

  return (
    <div className="App">
      <h1>🎵 My Vocals</h1>
      <p>Checkout my playlist. Select a language genre to get started.</p>
      <div>
        {musicGenre.map(function (genre) {
          return (
            <button key={genre} onClick={() => buttonClickHandler(genre)}>
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <div>
        {suggestions.map(function (songs) {
          return (
            <div key={songs.name} className="songs">
              <div style={{ fontSize: "1.3rem" }}>{songs.name}</div>
              <div>{songs.rating}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
