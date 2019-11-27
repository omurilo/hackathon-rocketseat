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
import Code from '../Code';
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

  useEffect(() => {
    setCodeBlocks([]);
    setCircleX(width / 2);
    setCircleY(height / 2);
  }, [level]); // eslint-disable-line

  function handleMove(direction, steps, origin = 'code') {
    switch (direction) {
      case 'Up':
        if (circleY - steps * delta > dimensions.minY) {
          setCircleY(circleY - steps * delta);
          setCodeBlocks([
            {
              string: `MovePlayer('${direction}'${
                Number(level) === 3 ? `, ${steps}` : ''
              });`,
              origin,
              setIsOpen,
            },
            ...codeBlocks,
          ]);
        }
        break;
      case 'Left':
        if (circleX - steps * delta > dimensions.minX) {
          setCircleX(circleX - steps * delta);
          setCodeBlocks([
            {
              string: `MovePlayer('${direction}'${
                Number(level) === 3 ? `, ${steps}` : ''
              });`,
              origin,
              setIsOpen,
            },
            ...codeBlocks,
          ]);
        }
        break;
      case 'Right':
        if (circleX + steps * delta < dimensions.maxX) {
          setCircleX(circleX + steps * delta);
          setCodeBlocks([
            {
              string: `MovePlayer('${direction}'${
                Number(level) === 3 ? `, ${steps}` : ''
              });`,
              origin,
              setIsOpen,
            },
            ...codeBlocks,
          ]);
        }
        break;
      case 'Down':
        if (circleY + steps * delta < dimensions.maxY) {
          setCircleY(circleY + steps * delta);
          setCodeBlocks([
            {
              string: `MovePlayer('${direction}'${
                Number(level) === 3 ? `, ${steps}` : ''
              });`,
              origin,
              setIsOpen,
            },
            ...codeBlocks,
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
          title: 'Faça o círculo se mover!',
          text: `
          Faça o círculo se mover para baixo utilizando a função de mover:
          MovePlayer('Direção');`,
          input: 'text',
          inputPlaceholder: 'Faça o círculo se mover para baixo',
          inputValue: '',
          showCancelButton: true,
          inputValidator: value => {
            const newValue = value.split("'");
            if (
              newValue[0] === 'MovePlayer(' &&
              newValue[1] === 'Down' &&
              newValue[2] === ');'
            ) {
              setTimeout(() => {
                setTimeout(() => {
                  Alert.fire({
                    icon: 'success',
                    title: 'Parabéns, você passou para o próximo nível!',
                    showCloseButton: false,
                    allowOutsideClick: false,
                    onAfterClose: () => {
                      history.push(`/disciplina/${id}/2`);
                    },
                  });
                }, 2000);
                return handleMove(newValue[1], 1, 'user');
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
          title: 'Faça o círculo se mover!',
          text: `Faça o círculo se mover para direita duas vezes utilizando a função de mover:
          MovePlayer('Direção');`,
          input: 'text',
          inputPlaceholder: 'Faça o círculo se mover para a direita 2x',
          inputValue: '',
          showCancelButton: true,
          inputValidator: value => {
            const newValue = value.split(';');
            const first = newValue[0].split("'");
            const second = newValue[1].split("'");
            if (
              first[0] === 'MovePlayer(' &&
              first[1] === 'Right' &&
              first[2] === ')' &&
              (second[0] === 'MovePlayer(' &&
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
                      history.push(`/disciplina/${id}/3`);
                    },
                  });
                }, 2000);
                return handleMove(first[1], 2, 'user');
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
          title: 'Faça o círculo se mover!',
          text: `Faça o círculo se mover para esquerda 2 vezes, utilizando a função de mover:
          MovePlayer('Direção', passos [ex: 2]);`,
          input: 'text',
          inputPlaceholder: 'Faça o círculo se mover para baixo',
          inputValue: '',
          showCancelButton: true,
          inputValidator: value => {
            const newValue = value.split("'");
            const steps = newValue[2].replace(/[^0-9]+/gi, '');
            if (
              newValue[0] === 'MovePlayer(' &&
              newValue[1] === 'Left' &&
              newValue[2] === ', 2);'
            ) {
              setTimeout(() => {
                setTimeout(() => {
                  Alert.fire({
                    icon: 'success',
                    title: 'Parabéns, você completou o tutorial!',
                    showCloseButton: false,
                    allowOutsideClick: false,
                    onAfterClose: () => {
                      history.push('/disciplinas');
                    },
                  });
                }, 2000);
                return handleMove(newValue[1], steps, 'user');
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
              disabled={Number(level) !== 1}
            >
              <FaArrowAltCircleUp size="32" color="white" />
            </button>
          </div>
          <div className="buttons-container">
            <button
              type="button"
              className="button"
              onClick={() => handleMove('Left', 1)}
              disabled={Number(level) !== 2}
            >
              <FaArrowAltCircleLeft size="32" color="white" />
            </button>
            <button
              type="button"
              className="button"
              onClick={() => handleMove('Down', 1)}
              disabled
            >
              <FaArrowAltCircleDown size="32" color="white" />
            </button>
            <button
              type="button"
              className="button"
              onClick={() => handleMove('Right', 1)}
              disabled={Number(level) !== 3}
            >
              <FaArrowAltCircleRight size="32" color="white" />
            </button>
          </div>
        </div>
        <div className="tips-container">
          {Number(level) === 1 && (
            <p>
              <p>
                Utilize a seta{' '}
                <strong style={{ color: '#43cfec' }}>&ldquo;Azul&ldquo;</strong>{' '}
                para mover o círculo
              </p>
              <p>
                O botão{' '}
                <strong style={{ color: '#f30092' }}>&ldquo;Rosa&ldquo;</strong>{' '}
                que aparece à esquerda é uma representação da função que é
                executada para fazê-lo se mover
              </p>
              <p>
                Clique no botão{' '}
                <strong style={{ color: '#f30092' }}>&ldquo;Rosa&ldquo;</strong>{' '}
                para realizar o <strong>desafio</strong>
              </p>
              <p>
                <strong style={{ color: '#fe9a01' }}>Dica:</strong> perceba que
                a direção utilizada está escrita na língua inglesa (en-US)
              </p>
            </p>
          )}
          {Number(level) === 2 && (
            <div>
              <p>Execute duas vezes o movimento com o círculo</p>
              <p>
                Clique em um dos botões{' '}
                <strong style={{ color: '#f30092' }}>Rosa</strong> para realizar
                o desafio
              </p>
              <p>
                <strong style={{ color: '#fe9a01' }}>Dica:</strong> Para
                executar o movimento duas vezes (no desafio), utilize a notação:{' '}
                <code style={{ padding: 10 }}>
                  MovePlayer(&apos;Direção&apos;);MovePlayer(&apos;Direção&apos;);
                </code>
              </p>
            </div>
          )}
          {Number(level) === 3 && (
            <div>
              <p>Execute duas vezes o movimento com o círculo</p>
              <p>
                Clique em um dos botões{' '}
                <strong style={{ color: '#f30092' }}>Rosa</strong> para realizar
                o desafio
              </p>
              <p>
                <strong style={{ color: '#fe9a01' }}>Dica:</strong> Uma
                simplificação do desafio anterior é utilizar o parâmetro de
                passos à dar (um número positivo), ex:{' '}
              </p>
              <code style={{ padding: 10 }}>
                MovePlayer(&apos;Direção&apos;, 3);
              </code>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StageContainer;
