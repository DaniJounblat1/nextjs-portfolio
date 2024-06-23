// header.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const AudioButton = ({ handlePlayPause, isPlaying }) => {
    return (
        <button onClick={handlePlayPause} className="play-pause-btn">
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
    );
};

export default AudioButton;
