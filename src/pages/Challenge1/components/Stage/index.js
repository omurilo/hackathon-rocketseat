import React, { useState, useEffect } from 'react';
// import Konva from 'konva';
import { Stage, Layer, Circle } from 'react-konva';
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowAltCircleUp,
} from 'react-icons/fa';
import Alert from '~/services/Alert';
import Code from '~/pages/Challenge1/components/Code';
import './index.css';

function StageContainer({ width, height, delta, radius, history, match }) {
  const [circleX, setCircleX] = useState(width / 2);
  const [circleY, setCircleY] = useState(height / 2);

  const [isOpen, setIsOpen] = useState(false);

  const [codeBlocks, setCodeBlocks] = useState([]);

  const { level, id } = match.params;

  const dimensions = {
    maxX: width - radius,
    minX: radius,
    maxY: height - radius,
    minY: radius,
  };

  function handleMove(direction, steps, origin = 'code') {
    switch (direction) {
      case 'Up':
        if (circleY - steps * delta > dimensions.minY) {
          setCircleY(circleY - steps * delta);
          setCodeBlocks([
            ...codeBlocks,
            {
              string: `MovePlayer('${direction}', ${steps})`,
              origin,
              setIsOpen,
            },
          ]);
        }
        break;
      case 'Left':
        if (circleX - steps * delta > dimensions.minX) {
          setCircleX(circleX - steps * delta);
          setCodeBlocks([
            ...codeBlocks,
            {
              string: `MovePlayer('${direction}', ${steps})`,
              origin,
              setIsOpen,
            },
          ]);
        }
        break;
      case 'Right':
        if (circleX + steps * delta < dimensions.maxX) {
          setCircleX(circleX + steps * delta);
          setCodeBlocks([
            ...codeBlocks,
            {
              string: `MovePlayer('${direction}', ${steps})`,
              origin,
              setIsOpen,
            },
          ]);
        }
        break;
      case 'Down':
        if (circleY + steps * delta < dimensions.maxY) {
          setCircleY(circleY + steps * delta);
          setCodeBlocks([
            ...codeBlocks,
            {
              string: `MovePlayer('${direction}', ${steps})`,
              origin,
              setIsOpen,
            },
          ]);
        }
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    if (isOpen) {
      if (Number(level) === 1) {
        Alert.fire({
          title:
            'Faça o player se mover para baixo utilizando o exemplo a seguir',
          text: `handleMove('Direção')`,
          input: 'text',
          inputPlaceholder: 'Faça o player se mover para baixo',
          inputValue: '',
          showCancelButton: true,
          inputValidator: value => {
            const newValue = value.split("'");
            if (
              newValue[0] === 'handleMove(' &&
              newValue[1] === 'Down' &&
              newValue[2] === ')'
            ) {
              setTimeout(() => {
                setTimeout(() => {
                  Alert.fire({
                    icon: 'success',
                    title: 'Parabéns, você passou para o próximo nível!',
                    showCloseButton: false,
                    allowOutsideClick: false,
                    onAfterClose: () => {
                      history.push(`/desafio/${id}/2`);
                    },
                  });
                }, 2000);
                return handleMove(newValue[1], 5, 'user');
              }, 500);
            } else {
              return 'Função errada!';
            }

            return 0;
          },
          onAfterClose: () => setIsOpen(false),
        });
      } else if (Number(level) === 2) {
        Alert.fire({
          title:
            'Faça o player se mover para direita e retornar a posição original utilizando o exemplo a seguir',
          text: `handleMove('Direção')`,
          input: 'text',
          inputPlaceholder:
            'Faça o player se mover para a direita e retornar a posição original',
          inputValue: '',
          showCancelButton: true,
          inputValidator: value => {
            const newValue = value.split(';');
            const first = newValue[0].split("'");
            const second = newValue[1].split("'");
            if (
              first[0] === 'handleMove(' &&
              first[1] === 'Right' &&
              first[2] === ')' &&
              (second[0] === 'handleMove(' &&
                second[1] === 'Right' &&
                second[2] === ')')
            ) {
              setTimeout(() => {
                setTimeout(() => {
                  Alert.fire({
                    icon: 'success',
                    title: 'Parabéns, você passou para o próximo nível!',
                    showCloseButton: false,
                    allowOutsideClick: false,
                    onAfterClose: () => {
                      history.push(`/desafio/${id}/3`);
                    },
                  });
                }, 2000);
                return handleMove(first[1], 1, 'user');
              }, 500);
            } else {
              return 'Função errada!';
            }

            return 0;
          },
          onAfterClose: () => setIsOpen(false),
        });
      } else if (Number(level) === 3) {
        Alert.fire({
          title:
            'Faça o player se mover para baixo utilizando o exemplo a seguir',
          text: `handleMove('Direção')`,
          input: 'text',
          inputPlaceholder: 'Faça o player se mover para baixo',
          inputValue: '',
          showCancelButton: true,
          inputValidator: value => {
            const newValue = value.split("'");
            if (
              newValue[0] === 'handleMove(' &&
              newValue[1] === 'Left' &&
              newValue[2] === ')'
            ) {
              setTimeout(() => {
                setTimeout(() => {
                  Alert.fire({
                    icon: 'success',
                    title: 'Parabéns, você completou o tutorial!',
                    showCloseButton: false,
                    allowOutsideClick: false,
                    onAfterClose: () => {
                      history.push('/desafios');
                    },
                  });
                }, 2000);
                return handleMove(newValue[1], 5, 'user');
              }, 500);
            } else {
              return 'Função errada!';
            }

            return 0;
          },
          onAfterClose: () => setIsOpen(false),
        });
      }
    }
  }, [isOpen]); // eslint-disable-line

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
          <Code codeBlocks={codeBlocks} />
        </div>
        <Stage width={width} height={height} className="container-events">
          <Layer>
            <Circle
              x={circleX}
              y={circleY}
              radius={radius}
              fill="#f30092"
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
