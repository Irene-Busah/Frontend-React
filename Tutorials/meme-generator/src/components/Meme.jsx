/* eslint-disable no-unused-vars */
import memesData from "../../memesData";
import React from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [memeData, setMemeData] = React.useState(memesData);

  function getRandomImageUrl() {
    const memes = memeData.data.memes;
    const randomIndex = Math.floor(Math.random() * memes.length);
    const randomImage = memes[randomIndex];
    const url = randomImage.url;
    setMemeImage((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
      <img src={memeImage.randomImage} alt="Meme" />
    </main>
  );
}
