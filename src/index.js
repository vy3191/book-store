import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot as hotReloader } from 'react-hot-loader/root';
import configureStore, { history } from './redux/store/configureStore';
import BaseApp from './pages/BaseApp';
import './scss/main.scss';

const store = configureStore({});

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>    
        <BaseApp />
      </ConnectedRouter>
    </Provider>
  )
};

const HotReloadedApp = hotReloader(App);

ReactDOM.render(<HotReloadedApp />, document.getElementById("root"));

// >>>>>> Webpack 3 version used below config for hot reload. No longer required instead use react-hot-reload library

// module.hot && (
//   module.hot.accept("./BaseApp", () => {
//     const nextRender = require("./BaseApp").default;
//     render(nextRender);
//   }),
//   module.hot.decline()
// );
