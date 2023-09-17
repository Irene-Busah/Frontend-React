import memesData from "../../memesData";
import React from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  function getRandomImageUrl() {
    const memes = memesData.data.memes;
    const randomIndex = Math.floor(Math.random() * memes.length);
    const randomImage = memes[randomIndex];
    setMemeImage(randomImage.url);
  }
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getRandomImageUrl}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} alt="Meme" />
    </main>
  );
}
