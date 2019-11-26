import React from 'react';
import Page from '~/components/Page';

import indexHtml from '../../google-blockly-ba6dfd8/demos/fibonacci/index.html';

export default function Challenge2() {
  return (
    <Page title="Challenge2">
      <iframe
        style={{ width: 800, height: 400 }}
        title="challenge-2"
        src={indexHtml}
      />
    </Page>
  );
}
