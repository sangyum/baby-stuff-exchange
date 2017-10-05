const React = require("react");
const { NativeRouter, Route, Link } = require("react-router-native");
const buildStore = require("./state/store");
const { Provider } = require("react-redux");
const { AppContainer } = require("./state/containers/app");
const { StyleSheet, Text, View } = require("react-native");
const firebase = require("firebase").default;
const firebaseConfig = require("./config/firebase.js");

const store = buildStore();

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
