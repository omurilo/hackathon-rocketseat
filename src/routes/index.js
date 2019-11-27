import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Challenges from '~/pages/Challenges';
import Challenge1 from '~/pages/Challenge1';

import Physics from '~/pages/Physics';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/disciplinas" component={Challenges} />
      <Route exact path="/desafios" component={Challenges} />
      <Route exact path="/carreiras" component={Challenges} />
      {/* <Route exact path="/desafio/:id" component={Challenge1} /> */}
      <Route exact path="/desafio/4" component={Physics} />
    </Switch>
  );
}
