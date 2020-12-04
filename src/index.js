
import BaseApp from './BaseApp';


ReactDOM.render(
  <BaseApp />, 
  document.getElementById('root')
);

// >>>>>> Webpack 3 version used below config for hot reload. No longer required instead use react-hot-reload library

// module.hot && (
//   module.hot.accept("./BaseApp", () => {
//     const nextRender = require("./BaseApp").default;
//     render(nextRender);
//   }),
//   module.hot.decline()
// );
