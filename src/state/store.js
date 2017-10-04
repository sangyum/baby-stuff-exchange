const { createStore, compose } = require("redux");
const rootReducer = require("./reducers");

let devToolsExtension =
  typeof window === "undefined" ? undefined : window.devToolsExtension;

let composeStoreWithMiddleware = compose(
  devToolsExtension && process.env.NODE_ENV.match(/development|mock/)
    ? devToolsExtension()
    : f => f
)(createStore);

module.exports = initialState =>
  composeStoreWithMiddleware(rootReducer, initialState);
