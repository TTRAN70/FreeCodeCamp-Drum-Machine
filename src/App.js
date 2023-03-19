import React from "react";
import "./style.css";
import Drum from "./Drum.js";
import ReactFCCtest from 'react-fcctest';

export default function App() {
  return (
    <div>
      <ReactFCCtest />
      <div className="wrapper">
        <Drum />
      </div>
    </div>
  );
}
