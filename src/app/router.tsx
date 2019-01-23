import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import RootComponent from './core/root/root.component';
import { Provider } from 'react-redux';
import { RendererContainer } from './core/renderer/renderer.container';
import { store } from './store';

export const AppRouter: React.StatelessComponent<{}> = () => {


  return (
    <Provider store={store}>
        <HashRouter>
          <div>
          <Route exact path="/" component={RootComponent} />
            <Switch>
              <Route path="/" component={RendererContainer} />
            </Switch>
          </div>
        </HashRouter>
    </Provider>

  );
}