import React from 'react';
import Page from '~/components/Page';
import ChallengeContainer from './components/Stage';

export default function BasicChallenge() {
  return (
    <Page title="Tutorial">
      <ChallengeContainer width={500} height={400} delta={25} radius={30} />
    </Page>
  );
}
