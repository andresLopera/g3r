import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import RootComponent from './core/rootComponent';
import { Provider } from 'react-redux';
import { store } from '../store';
import { RendererContainer } from './core/renderer/rendererContainer';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
        <HashRouter>
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={RootComponent} />
              <Route path="/renderer" component={RendererContainer} />
            </Switch>
          </div>
        </HashRouter>
    </Provider>

  );
}