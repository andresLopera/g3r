import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import RootComponent from './core/rootComponent';
import RendererComponent from './core/rendererComponent';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <HashRouter>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={RootComponent} />
          <Route path="/renderer" component={RendererComponent} />
        </Switch>
      </div>
    </HashRouter>
  );
}