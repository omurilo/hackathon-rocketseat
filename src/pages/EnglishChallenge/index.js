import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Page from '~/components/Page';
import {
  DescriptionContainer,
  FlexContainer,
  Code,
  Description,
  Button,
} from './styles';
import Alert from '~/services/Alert';

export default function EnglishChallenge() {
  const items = [
    { id: '3', value: `print 'Correct answer'` },
    { id: '0', value: 'x=12*12;' },
    { id: '2', value: 'then' },
    { id: '1', value: 'if x === 144;' },
    { id: '6', value: 'end' },
    { id: '4', value: `else` },
    { id: '5', value: `print 'Incorrect answer'` },
  ];
  const [words, setWords] = useState(items);

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const grid = 8;

  function getItemStyle(isDragging, draggableStyle) {
    return {
      // some basic styles to make the items look a bit nicer
      userSelect: 'none',
      padding: grid * 2,
      margin: `0 0 ${grid}px 0`,

      // change background colour if dragging
      background: isDragging ? 'lightgreen' : '#43cfec',

      // styles we need to apply on draggables
      ...draggableStyle,
    };
  }

  function getListStyle(isDraggingOver) {
    return {
      background: isDraggingOver ? '#fff' : '#fff',
      padding: grid,
      width: 250,
      border: '1px solid #43cfec',
      borderRadius: '10px',
    };
  }

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newWords = reorder(
      words,
      result.source.index,
      result.destination.index
    );

    setWords(newWords);
  }

  function isCorrect() {
    let correct = true;
    for (let i = 0; i < words.length; i += 1) {
      if (words[i].id !== i.toString()) {
        correct = false;
      }
    }
    Alert.fire({
      title: `Resposta ${correct ? 'Correta!' : 'Incorreta'}`,
      icon: correct ? 'success' : 'error',
    });
  }

  return (
    <Page title="Desafio de inglês">
      <DescriptionContainer>
        <Description>
          O código abaixo está escrito em português. Arraste as peças no menu à
          direita para reproduzir o mesmo resultado em inglês.
        </Description>
      </DescriptionContainer>
      <FlexContainer>
        <Code>
          <pre>
            <code>
              {`
                x=12*12;
                se x === 144;
                entao
                imprima 'Correct answer';
                senao
                imprima 'Incorrect answer';
                fim
                `}
            </code>
          </pre>
        </Code>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {words.map((word, index) => (
                  <Draggable key={word.id} draggableId={word.id} index={index}>
                    {(innerProvided, innerSnapshot) => (
                      <div
                        ref={innerProvided.innerRef}
                        {...innerProvided.draggableProps}
                        {...innerProvided.dragHandleProps}
                        style={getItemStyle(
                          innerSnapshot.isDragging,
                          innerProvided.draggableProps.style
                        )}
                      >
                        {word.value}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <Button onClick={isCorrect} type="button">
          Validar resposta
        </Button>
      </FlexContainer>
    </Page>
  );
}
