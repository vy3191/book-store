import { Provider } from 'react-redux';
import { hot as hotReloader } from 'react-hot-loader/root';

const BaseApp = () => {
  return (
    <Provider>
      <h1>Book Store App</h1>
    </Provider>
  )
}

export default hotReloader(BaseApp);
