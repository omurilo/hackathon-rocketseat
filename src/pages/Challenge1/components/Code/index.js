import React, { useState } from 'react';

import { CodeBox } from './styles';

export default function Code() {
  const [codeBlocks, setCodeBlocks] = useState([
    'linha de código',
    'code line',
    'blablabla',
  ]);
  return (
    <CodeBox>
      {codeBlocks.map(codeBlock => (
        <li>{codeBlock}</li>
      ))}
    </CodeBox>
  );
}
