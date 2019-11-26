import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Challenges from '~/pages/Challenges';
import Challenge from '~/pages/Challenge';

export default function Routes() {
  return (
    <Switch>
      <Route path="/disciplinas" component={Challenges} />
      <Route path="/desafios" component={Challenges} />
      <Route path="/carreiras" component={Challenges} />
      <Route path="/desafio" component={Challenge} />
    </Switch>
  );
}
