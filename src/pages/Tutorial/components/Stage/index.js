import React, { useState } from 'react';
import { Stage, Layer, Circle } from 'react-konva';
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowAltCircleUp,
} from 'react-icons/fa';

import './index.css';

import Code from '../Code';

function StageContainer({ width, height, delta, radius }) {
  const [circleX, setCircleX] = useState(width / 2);
  const [circleY, setCircleY] = useState(height / 2);

  const [codeBlocks, setCodeBlocks] = useState([]);

  const dimensions = {
    maxX: width - radius,
    minX: radius,
    maxY: height - radius,
    minY: radius,
  };

  function handleMove(direction, steps) {
    switch (direction) {
      case 'Up':
        if (circleY - steps * delta > dimensions.minY) {
          setCircleY(circleY - steps * delta);
          setCodeBlocks([...codeBlocks, `MovePlayer('Up', 1)`]);
        }
        break;
      case 'Left':
        if (circleX - steps * delta > dimensions.minX) {
          setCircleX(circleX - steps * delta);
          setCodeBlocks([...codeBlocks, `MovePlayer('Left', 1)`]);
        }
        break;
      case 'Right':
        if (circleX + steps * delta < dimensions.maxX) {
          setCircleX(circleX + steps * delta);
          setCodeBlocks([...codeBlocks, `MovePlayer('Right', 1)`]);
        }
        break;
      case 'Down':
        if (circleY + steps * delta < dimensions.maxY) {
          setCircleY(circleY + steps * delta);
          setCodeBlocks([...codeBlocks, `MovePlayer('Down', 1)`]);
        }
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <div className="container-top">
        <div className="container-code">
          <Code codeBlocks={codeBlocks} />
        </div>
        <Stage width={width} height={height} className="container-events">
          <Layer>
            <Circle
              x={circleX}
              y={circleY}
              radius={radius}
              fill="#7159c1"
              stroke="black"
              strokeWidth={0}
            />
          </Layer>
        </Stage>
      </div>
      <div className="container-bottom">
        <div className="keyboard-container">
          <div className="buttons-container">
            <button
              type="button"
              className="button"
              onClick={() => handleMove('Up', 1)}
            >
              <FaArrowAltCircleUp size="32" color="white" />
            </button>
          </div>
          <div className="buttons-container">
            <button
              type="button"
              className="button"
              onClick={() => handleMove('Left', 1)}
            >
              <FaArrowAltCircleLeft size="32" color="white" />
            </button>
            <button
              type="button"
              className="button"
              onClick={() => handleMove('Down', 1)}
            >
              <FaArrowAltCircleDown size="32" color="white" />
            </button>
            <button
              type="button"
              className="button"
              onClick={() => handleMove('Right', 1)}
            >
              <FaArrowAltCircleRight size="32" color="white" />
            </button>
          </div>
        </div>
        <div className="tips-container">
          <p>Estamos dando dicas</p>
        </div>
      </div>
    </div>
  );
}

export default StageContainer;
