import React from 'react';
import Page from '~/components/Page';
import ChallengeContainer from './components/Stage';

export default function Challenge() {
  return (
    <Page title="Desafio de Física">
      <ChallengeContainer width={500} height={400} delta={25} radius={30} />
    </Page>
  );
}
