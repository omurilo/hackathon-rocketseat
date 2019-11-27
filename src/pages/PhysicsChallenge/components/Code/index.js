import React from 'react';

import { CodeBox, BoxItem } from './styles';

export default function Code({ codeBlocks }) {
  return (
    <CodeBox>
      {codeBlocks.map(codeBlock => (
        <BoxItem>{codeBlock}</BoxItem>
      ))}
    </CodeBox>
  );
}
