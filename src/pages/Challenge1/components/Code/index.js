import React from 'react';

import { CodeBox } from './styles';

export default function Code({ codeBlocks }) {
  return (
    <CodeBox>
      {codeBlocks.map(codeBlock => (
        <li>{codeBlock}</li>
      ))}
    </CodeBox>
  );
}
