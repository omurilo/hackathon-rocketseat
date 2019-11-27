import React from 'react';

import { CodeBox, BoxItem } from './styles';

export default function Code({ codeBlocks }) {
  return (
    <CodeBox>
      {codeBlocks.map((codeBlock, idx) => (
        <BoxItem
          // eslint-disable-next-line react/no-array-index-key
          key={`${idx}-${codeBlock.origin}`}
          origin={codeBlock.origin}
          onClick={() => codeBlock.setIsOpen(true)}
        >
          {codeBlock.string}
        </BoxItem>
      ))}
    </CodeBox>
  );
}
