import React from 'react';
import Page from '~/components/Page';

export default function Challenge() {
  return (
    <Page title="Desafios com Blockly">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
          paddingBottom: 20,
        }}
      >
        <iframe
          title="Challenge Blockly"
          style={{
            width: 750,
            height: 900,
            border: 0,
          }}
          src="https://clever-noether-ed0365.netlify.com/demos/fibonacci/"
        />
      </div>
    </Page>
  );
}
