import React, { useState } from "react";
import VideoPlay from "./VideoPlay";
import * as Tone from "tone";

const GridComponent = () => {
  /* styles */
  const svgStyle1 = {
    position: "absolute",
    top: "1024px",
    left: "694px",
    width: "100px",
    height: "200px",
    zIndex: 2,
  };
  const svgStyle2 = {
    position: "absolute",
    top: "1155px",
    left: "824px",
    width: "30px",
    height: "200px",
    zIndex: 2,
  };
  const svgStyle3 = {
    position: "absolute",
    top: "1024px",
    left: "890px",
    width: "100px",
    height: "200px",
    zIndex: 2,
  };
  const svgStyle4 = {
    position: "absolute",
    top: "1155px",
    right: "170px",
    width: "100px",
    height: "200px",
    zIndex: 2,
  };
  const svgStyle5 = {
    position: "absolute",
    top: "1024px",
    right: "40px",
    width: "100px",
    height: "200px",
    zIndex: 2,
  };

  const svgStyle6 = {
    position: "absolute",
    top: "924px",
    left: "468px",
    width: "130px",
    height: "200px",
    boxShadow: "30px 30px 30px rgba(0, 0, 0, 0.5)",
    zIndex: 2,
  };

  const svgStyle7 = {
    position: "absolute",
    bottom: "826px",
    right: "-254px",
    width: "262px",
    height: "200px",
    boxShadow: "30px 30px 30px rgba(0, 0, 0, 0.5)",
    zIndex: 2,
  };

  const svgStyle8 = {
    position: "absolute",
    top: "726px",
    right: "338px",
    width: "262px",
    height: "134px",
    boxShadow: "30px 30px 30px rgba(0, 0, 0, 0.5)",
    zIndex: 2,
  };

  const svgStyle9 = {
    position: "absolute",
    top: "794px",
    right: "72px",
    width: "134px",
    height: "133px",
    boxShadow: "30px 30px 30px rgba(0, 0, 0, 0.5)",
    zIndex: 2,
  };

  const svgStyle10 = {
    position: "absolute",
    bottom: "694px",
    left: "828px",
    width: "198px",
    height: "200px",
    boxShadow: "30px 30px 30px rgba(0, 0, 0, 0.5)",
    zIndex: 2,
  };

  const verticalLine = {
    content: "''",
    position: "absolute",
    top: "37%",
    right: "49.25%",
    width: "1px",
    height: "25%",
    backgroundColor: "gray",
    opacity: 0.5,
  };

  const horizontalLine = {
    content: "''",
    position: "absolute",
    bottom: "49%",
    right: "37%",
    width: "25%",
    height: "1px",
    backgroundColor: "gray",
    opacity: 0.5,
  };
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 66px)",
    gridAutoRows: "66px",
    width: "320vh",
    margin: "auto",
  };

  const gridItemStyle = {
    width: "33px",
    height: "33px",
    boxShadow: "inset 0 0 0 0.5px rgba(0, 0, 0, 0.1)",
    position: "relative",
    transition: "background-color 0.5s ease",
  };

  const gridGroupStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 33px)",
    gridTemplateRows: "repeat(2, 33px)",
    position: "relative",
  };

  const getRandomColor = () => {
    const colors = ["#FF5733", "#3498db", "#f4d03f"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const ColoredCell = () => {
    const [hovered, setHovered] = useState(false);
    const [randomColor, setRandomColor] = useState("#fff");

    const [opacity, setOpacity] = useState(1);

    //sound
    const [isPlaying, setIsPlaying] = useState(false);

    //changed cursor
    const [clicking, setClicking] = useState(false);

    const handleMouseEnter = () => {
      setRandomColor(getRandomColor());
      setHovered(true);
    };

    const handleMouseLeave = () => {
      setTimeout(() => {
        setHovered(false);
      }, 500);
    };

    //changed cursor
    const handleMouseDown = () => {
      setClicking(true);
      setOpacity(0.5);
    };

    const handleMouseUp = () => {
      setClicking(false);
      setOpacity(1);
    };

    const notes = ["C5", "D5", "E5", "F5", "G5", "A5", "B5"]; // Lista de notas

    const handlePlay = (note, semitones) => {
      if (!isPlaying) {
        setIsPlaying(true);
        const synth = new Tone.Synth().toDestination();

        const adjustedNote = Tone.Midi(note).transpose(semitones).toNote();

        synth.triggerAttackRelease(adjustedNote, "8n");
        setTimeout(() => {
          synth.triggerRelease();
          synth.dispose();
          setIsPlaying(false);
        }, 500);
      }
    };

    let currentNoteIndex = 0; //current note value

    const handleDivClick = () => {
      const currentNote = notes[currentNoteIndex]; //get current grade
      handlePlay(currentNote, 2);

      //Advance to the next note index
      currentNoteIndex = (currentNoteIndex + 1) % notes.length;
    };

    return (
      <div
        style={{
          ...gridItemStyle,
          backgroundColor: hovered ? randomColor : "#fff",
          cursor: clicking ? "grabbing" : "grab",
          opacity: opacity,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={handleDivClick}
      >
        <div style={gridGroupStyle}></div>
        <div style={gridGroupStyle}></div>
      </div>
    );
  };

  return (
    <div className="skills-container">
      <svg
        width="100"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        style={svgStyle1}
      >
        <text
          x="-10"
          y="-27"
          font-family="Arial"
          font-size="140"
          fill="black"
          font-weight="bold"
          alignment-baseline="text-before-edge"
          transform="scale(1.2, 2)"
        >
          D
        </text>
      </svg>
      <svg
        width="30"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        style={svgStyle2}
      >
        <text
          x="-7.2"
          y="-27"
          font-family="Arial"
          font-size="140"
          fill="black"
          font-weight="bold"
          alignment-baseline="text-before-edge"
          transform="scale(1.2, 2)"
        >
          I
        </text>
      </svg>

      <svg
        width="100"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        style={svgStyle3}
      >
        <text
          x="-9"
          y="-27"
          font-family="Arial"
          font-size="140"
          fill="black"
          font-weight="bold"
          alignment-baseline="text-before-edge"
          transform="scale(1.3, 2)"
        >
          E
        </text>
      </svg>

      <svg
        width="100"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        style={svgStyle4}
      >
        <text
          x="-8.5"
          y="-25"
          font-family="Arial"
          font-size="136"
          fill="black"
          font-weight="bold"
          alignment-baseline="text-before-edge"
          transform="scale(1.1, 2)"
        >
          G
        </text>
      </svg>

      <svg
        width="100"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        style={svgStyle5}
      >
        <text
          x="-7"
          y="-24.5"
          font-family="Arial"
          font-size="140"
          fill="black"
          font-weight="bold"
          alignment-baseline="text-before-edge"
          transform="scale(1.03, 1.9)"
        >
          O
        </text>
      </svg>

      <a href="/projects">
        <div style={svgStyle6}>
          <VideoPlay videoSrc="https://i.imgur.com/7DjgXsC.mp4" />
        </div>
      </a>

      <a href="/projects">
        <div style={svgStyle7}>
          <VideoPlay videoSrc="https://i.imgur.com/S903FFT.mp4" />
        </div>
      </a>

      <a href="https://es.react.dev" target="_blank" rel="noopener noreferrer">
        <div
          className="bg-neutral-800 flex justify-center items-center"
          style={svgStyle8}
        >
          <h2 className="h2Grid text-6xl cursor-pointer">
            <span className="spanGrid">REACT</span>
          </h2>
        </div>
      </a>

      <a href="/projects">
        <div style={svgStyle9}>
          <VideoPlay videoSrc="https://i.imgur.com/yPw3OE3.mp4" />
        </div>
      </a>

      <a href="/projects">
        <div style={svgStyle10}>
          <VideoPlay videoSrc="https://i.imgur.com/i8LfnX6.mp4" />
        </div>
      </a>

      <div style={gridContainerStyle}>
        {Array.from({ length: 1085 }, (_, index) => (
          <div
            handl
            key={index}
            style={{ ...gridGroupStyle, position: "relative" }}
          >
            <ColoredCell />
            <ColoredCell />
            <ColoredCell />
            <ColoredCell />

            {/* Adding verticalLine to the parent */}
            <div style={{ ...verticalLine }}></div>
            {/* Adding horizontalLine to the parent */}
            <div style={{ ...horizontalLine }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
