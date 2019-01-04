import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import RootComponent from './core/rootComponent';
import { Provider } from 'react-redux';
import { store } from '../store';
import { RendererContainer } from './core/renderer/renderer.container';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
        <HashRouter>
          <div className="container-fluid">
          <Route exact path="/" component={RootComponent} />
            <Switch>
              <Route path="/" component={RendererContainer} />
            </Switch>
          </div>
        </HashRouter>
    </Provider>

  );
}