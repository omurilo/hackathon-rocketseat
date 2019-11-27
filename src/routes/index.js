import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Challenges from '~/pages/Challenges';
import Tutorial from '~/pages/Tutorial';
import EnglishChallenge from '~/pages/EnglishChallenge';
import PhysicsChallenge from '~/pages/PhysicsChallenge';
import BlocklyChallenge from '~/pages/BlocklyChallenge';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/disciplinas" component={Challenges} />
      <Route exact path="/desafios" component={Challenges} />
      <Route exact path="/carreiras" component={Challenges} />
      <Route exact path="/disciplina/:id/:level" component={Tutorial} />
      <Route exact path="/disciplina/2" component={EnglishChallenge} />
      <Route exact path="/disciplina/3" component={PhysicsChallenge} />
      <Route exact path="/blockly" component={BlocklyChallenge} />
    </Switch>
  );
}
