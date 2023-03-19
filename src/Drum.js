import React from "react";
import "./Drum.css";
import React, { useState, useEffect } from "react";
import { FaPowerOff } from "react-icons/fa";

export default function Drum() {

  const[toggle, setToggle] = useState(true);
  const[vol, setVol] = useState(1);
  const[disp, setDisplay] = useState("");
  
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key == "q" || e.key == "w" || e.key == "e" || e.key == "a" || e.key == "s" || e.key == "d" || e.key == "z" || e.key == "x" || e.key == "c") {
        willPress(e.key);
        playSound(e.key);
      }
    })
    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.key == "q" || e.key == "w" || e.key == "e" || e.key == "a" || e.key == "s" || e.key == "d" || e.key == "z" || e.key == "x" || e.key == "c") {
          willPress(e.key);
          playSound(e.key);
        }
      });
    };
  }, []);

  useEffect(() => {
    [...document.querySelectorAll('.drum-pad')].forEach((item) => {
      item.addEventListener('click', (e) => {
        willPress(e.target.firstChild.id);
        playSound(e.target.firstChild.id);
      });
    });
    return () => {
      [...document.querySelectorAll('.drum-pad')].forEach((item) => {
        item.removeEventListener('click', (e) => {
          willPress(e.target.firstChild.id);
          playSound(e.target.firstChild.id);
        });
      });
    };
  });

  const playSound = (event) => {
    const audio = document.getElementById(event.toUpperCase());
    setDisplay(audio.parentElement.id);
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

  const willPress = (event) => {
    document.getElementById(event.toUpperCase()).parentElement.className = "drumPress";
    setTimeout(() => {
      document.getElementById(event.toUpperCase()).parentElement.className = "drum-pad";
    }, 100);
  }

  return (
    <div className="drumwrapper">
      <div id="drum-machine" className="drumset">
        <div className="drum-pad" id="Heater 1">
          <audio id="Q" className="sound" src={`${toggle ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" : ""}`}></audio>
          Q
        </div>
        <div className="drum-pad" id="Heater 2">
          <audio id="W" className="sound" src={`${toggle ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" : ""}`}></audio>
          W
        </div>
        <div className="drum-pad" id="Heater 3">
          <audio id="E" className="sound" src={`${toggle ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" : ""}`}></audio>
          E
        </div>
        <div className="drum-pad" id="Heater 4">
          <audio id="A" className="sound" src={`${toggle ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" : ""}`}></audio>
          A
        </div>
        <div className="drum-pad" id="Clap">
          <audio id="S" className="sound" src={`${toggle ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" : ""}`}></audio>
          S
        </div>
        <div className="drum-pad" id="Open HH">
          <audio id="D" className="sound" src={`${toggle ? "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" : ""}`}></audio>
          D
        </div>
        <div className="drum-pad" id="Kick n' Hat">
          <audio id="Z" className="sound" src={`${toggle ? "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" : ""}`}></audio>
          Z
        </div>
        <div className="drum-pad" id="Kick">
          <audio id="X" className="sound" src={`${toggle ? "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" : ""}`}></audio>
          X
        </div>
        <div className="drum-pad" id="Closed HH">
          <audio id="C" className="sound" src={`${toggle ? "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" : ""}`}></audio>
          C
        </div>
      </div>
      <div className="controls">
        <div className={toggle ? "buttonClass" : "offClass"}>
        <button onClick={() => willToggle()} type="button" id="power"><FaPowerOff className={toggle ? "power" : "poweroff"} /></button>
        </div>
        <div className="slider">
          <div className="rangeWrapper">
            <input type="range" id="volume" name="volume" min="0" max="1" step="0.01" defaultValue={vol} onChange={e => { setVol(e.target.value)
            setDisplay("Volume: " + Math.floor(e.target.value * 100))}
            }/>
            <div className="marker marker-0">0</div>
            <div className="marker marker-25">25</div>
            <div className="marker marker-50">50</div>
            <div className="marker marker-75">75</div>
            <div className="marker marker-100">100</div>
          </div>
           <label id="display" className="volmark" htmlFor="volume">{disp}</label>
        </div>
      </div>
    </div>
  );
}