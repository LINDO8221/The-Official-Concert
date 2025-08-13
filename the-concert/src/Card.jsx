import { useState, useRef } from "react";

function Card({ cover, title, audioSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="card" onClick={togglePlay}>
      <img className="card-image" src={cover} alt={`${title} cover`} />
      <h2 className="card-name">{title}</h2>
      <p className="card-status">
        {isPlaying ? "Pause ⏸️" : "Play ▶️"}
      </p>
      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
}

export default Card;
