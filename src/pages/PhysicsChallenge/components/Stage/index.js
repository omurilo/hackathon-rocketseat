import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Form, Input } from '@rocketseat/unform';
import Alert from '~/services/Alert';

import './index.css';

import Code from '../Code';
import Car from '~/assets/automobile.svg';
import { StyledForm } from './styles';

function formattedText(lines) {
  return lines.map(line => (
    <pre>
      <code>{line}</code>
    </pre>
  ));
}

function StageContainer({ width, height }) {
  const [circleX, setCircleX] = useState(width / 2);
  const [animationTime, setAnimationTime] = useState(0);
  const [codeBlocks, setCodeBlocks] = useState([]);
  const [showButton, setShowButton] = useState(false);

  function runAnimation(data) {
    const distance = parseInt(data.distance, 10);
    const time = parseInt(data.time, 10);

    setAnimationTime(time);
    setCircleX(width / 2 + distance);
    setCodeBlocks([
      ...codeBlocks,
      formattedText([
        'function velocidade(distancia, tempo) {',
        'return distancia / tempo',
        '}',
      ]),
    ]);
    setShowButton(true);
  }

  function startChallenge() {
    Alert.fire({
      title: 'Hora do código!',
      text:
        'Para criar uma função que devolve a distância percorrida pelo carrinho, quais parâmetros a função precisa?',
      inputPlaceholder: '(parametro1, parametro2)',
      input: 'textarea',
      inputValue: '',
      inputValidator: value => {
        if (
          value === '(velocidade, tempo)' ||
          value === '(tempo, velocidade)'
        ) {
          setTimeout(() => {
            Alert.fire({
              icon: 'success',
              title: 'Parabéns! Você concluiu o desafio',
            });
          }, 500);
        } else {
          return 'Parâmetros incorretos :(';
        }

        return 0;
      },
    });
  }

  return (
    <div>
      <div className="container-top-physics">
        <div className="container-code-physics">
          <Code codeBlocks={codeBlocks} />
        </div>
        <div width={width} height={height} className="container-events-physics">
          <div className="road-physics">
            <motion.img
              key={Car}
              src={Car}
              style={{
                width: 100,
                height: 100,
                margin: '0 auto',
                borderRadius: '50%',
              }}
              animate={{ x: circleX, y: '30px' }}
              transition={{ duration: animationTime }}
            />
          </div>
          <div className="button-wrapper-physics">
            <button
              type="button"
              onClick={startChallenge}
              hidden={!showButton}
              className="orange-button-physics"
            >
              Desafio
            </button>
          </div>
        </div>
      </div>
      <div className="container-bottom-physics">
        <StyledForm>
          <Form onSubmit={runAnimation}>
            <div className="input-wrapper-physics">
              <p>Distância</p>
              <Input type="number" name="distance" id="distance" max="255" />
            </div>
            <div className="input-wrapper-physics">
              <p>Tempo</p>
              <Input type="number" name="time" id="time" max="15" />
            </div>
            <div className="button-wrapper-physics">
              <button type="submit" className="blue-button-physics">
                Vai !
              </button>
            </div>
          </Form>
        </StyledForm>
        <div className="tips-container-physics">
          <p>Estamos dando dicas</p>
        </div>
      </div>
    </div>
  );
}

export default StageContainer;
