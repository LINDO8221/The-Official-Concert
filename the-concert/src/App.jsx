import { useRef, useState } from "react";
import Card from "./Card";
import Invite from "./Invite";

// Images

import cover6 from './assets/superpowers.jpeg';
import cover7 from './assets/japanese-denim.jpeg';
import coverF from './assets/freudian-cover.avif';

// Songs
import song1 from "/blessed.mp3";
import song2 from "/freudian.mp3";
import song3 from "/weFindLove.mp3";
import song4 from "/loose.mp3";
import song5 from "/neuRoses.mp3";
import song6 from '/superpowers.mp3';
import song7 from '/japaneseDenim.mp3';
import song8 from '/best-part.mp3';
import song9 from '/holdMeDown.mp3';


function App() {
  const songs = [
    { cover: coverF, title: "Blessed", audio: song1 },
    { cover: coverF, title: "Freudian", audio: song2 },
    { cover: coverF, title: "We Find Love", audio: song3 },
    { cover: coverF, title: "Loose", audio: song4 },
    { cover: coverF, title: "Neu Roses", audio: song5 },
    { cover: cover6 , title: "Superpowers" , audio: song6 },
    { cover: cover7 , title: "Japanese Denim" , audio: song7 },
    { cover: coverF , title: "Best Part" , audio: song8},
    { cover: coverF , title: "Hold Me Down" , audio: song9}
  ];

  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(new Audio());

  const playPause = (song) => {
    if (currentSong?.title === song.title) {
      audioRef.current.pause();
      setCurrentSong(null);
    } else {
      audioRef.current.src = song.audio;
      audioRef.current.play();
      setCurrentSong(song);
    }
  };

  return (
    <>
    <div className="cards-container">
      {songs.map((song, index) => (
        <Card
          key={index}
          cover={song.cover}
          title={song.title}
          audioSrc={song.audio}
        />
      ))}
    </div>

    <section className="extra-section">
      <Invite/>

    </section>

   </>     
  );
}

export default App;
