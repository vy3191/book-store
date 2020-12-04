import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { hot as hotReloader } from 'react-hot-loader/root';
import configureStore, { history } from './redux/store/configureStore';

const store = configureStore({});

const BaseApp = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>    
        <Switch>
          <Route exact path="/" render={() => (<div>Book store</div>)} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>     
      </ConnectedRouter>
    </Provider>
  )
}

export default hotReloader(BaseApp);
