import React from "react";
import "./Drum.css";
import React, { useState, useEffect } from "react";
import { FaPowerOff } from "react-icons/fa";

export default function Drum() {

  const[toggle, setToggle] = useState(true);
  const[vol, setVol] = useState(1);
  
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key == "q" || e.key == "w" || e.key == "e" || e.key == "a" || e.key == "s" || e.key == "d" || e.key == "z" || e.key == "x" || e.key == "c") {
        playSound(e);
      }
    })
    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.key == "q" || e.key == "w" || e.key == "e" || e.key == "a" || e.key == "s" || e.key == "d" || e.key == "z" || e.key == "x" || e.key == "c") {
          playSound(e);
        }
      });
    };
  }, []);

  const playSound = (event) => {
    const audio = document.getElementById(event.key.toUpperCase());
    const loudness = document.getElementById("volume").value;
    audio.volume = loudness;
    audio.currentTime = 0;
    audio.play();
  }

  const willToggle = () => {
    if (toggle) {
      setToggle(false);
    }
    else {
      setToggle(true);
    }
  }

  return (
    <div className="drumwrapper">
      <div className="drumset">
        <div className="drum-pad" id="heater1">
          <audio id="Q" className="sound" src={`${toggle ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" : ""}`}></audio>
          Q
        </div>
        <div className="drum-pad" id="heater2">
          <audio id="W" className="sound" src={`${toggle ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" : ""}`}></audio>
          W
        </div>
        <div className="drum-pad" id="heater3">
          <audio id="E" className="sound" src={`${toggle ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" : ""}`}></audio>
          E
        </div>
        <div className="drum-pad" id="heater4">
          <audio id="A" className="sound" src={`${toggle ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" : ""}`}></audio>
          A
        </div>
        <div className="drum-pad" id="clap">
          <audio id="S" className="sound" src={`${toggle ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" : ""}`}></audio>
          S
        </div>
        <div className="drum-pad" id="openH">
          <audio id="D" className="sound" src={`${toggle ? "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" : ""}`}></audio>
          D
        </div>
        <div className="drum-pad" id="kickhat">
          <audio id="Z" className="sound" src={`${toggle ? "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" : ""}`}></audio>
          Z
        </div>
        <div className="drum-pad" id="kick">
          <audio id="X" className="sound" src={`${toggle ? "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" : ""}`}></audio>
          X
        </div>
        <div className="drum-pad" id="closedH">
          <audio id="C" className="sound" src={`${toggle ? "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" : ""}`}></audio>
          C
        </div>
      </div>
      <div className="controls">
        <div className="buttonClass">
        <button onClick={() => willToggle()} type="button" id="power"><FaPowerOff className="power" /></button>
        </div>
        <div className="slider">
          <div className="rangeWrapper">
            <input type="range" id="volume" name="volume" min="0" max="1" step="0.01" defaultValue={vol} onChange={e => setVol(e.target.value)}/>
            <div class="marker marker-0">0</div>
            <div class="marker marker-25">25</div>
            <div class="marker marker-50">50</div>
            <div class="marker marker-75">75</div>
            <div class="marker marker-100">100</div>
          </div>
           <label htmlFor="volume">Volume</label>
        </div>
      </div>
    </div>
  );
}