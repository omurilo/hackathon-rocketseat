import React from 'react';
import Page from '~/components/Page';
import ChallengeContainer from './components/Stage';

export default function Challenge(props) {
  return (
    <Page title="Tutorial">
      <ChallengeContainer
        width={600}
        height={400}
        delta={60}
        radius={30}
        {...props}
      />
    </Page>
  );
}
