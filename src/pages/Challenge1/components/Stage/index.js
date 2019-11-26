import React, { useState } from 'react';
// import Konva from 'konva';
import { Stage, Layer, Circle } from 'react-konva';
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowAltCircleUp,
} from 'react-icons/fa';

import './index.css';

import Code from '~/pages/Challenge1/components/Code';

function StageContainer({ width, height, delta, radius }) {
  const [circleX, setCircleX] = useState(width / 2);
  const [circleY, setCircleY] = useState(height / 2);

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
        }
        break;
      case 'Left':
        if (circleX - steps * delta > dimensions.minX) {
          setCircleX(circleX - steps * delta);
        }
        break;
      case 'Right':
        if (circleX + steps * delta < dimensions.maxX) {
          setCircleX(circleX + steps * delta);
        }
        break;
      case 'Down':
        if (circleY + steps * delta < dimensions.maxY) {
          setCircleY(circleY + steps * delta);
        }
        break;
      default:
        break;
    }
  }

  // function handleMoveByKeyDown(e) {
  //   if (e.keyCode === 37) {
  //     if (circleX-delta > dimensions.minX) {
  //       setCircleX(circleX - delta);
  //     }
  //   } else if (e.keyCode === 38) {
  //     if (circleY-delta > dimensions.minY) {
  //       setCircleY(circleY - delta);
  //     }
  //   } else if (e.keyCode === 39) {
  //     if (circleX+delta < dimensions.maxX) {
  //       setCircleX(circleX + delta);
  //     }
  //   } else if (e.keyCode === 40) {
  //     if (circleY+delta < dimensions.maxY) {
  //       setCircleY(circleY + delta);
  //     }
  //   } else {
  //     return;
  //   }

  //   e.preventDefault();
  // }

  return (
    <div>
      <div className="container-top">
        <div className="container-code">
          <Code />
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
