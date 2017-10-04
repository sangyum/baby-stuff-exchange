const React = require("react");
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

  // render() {
  //   return (
  //     <Provider store={store}>
  //       <AppContainer fxns={fxns} />
  //     </Provider>
  //   );
  // }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

// <View style={styles.container}>
//   <Text>Baby Stuff Exchange</Text>
//   <Text>Open up App.js to start working on your app!</Text>
//   <Text>Changes you make will automatically reload.</Text>
//   <Text>Shake your phone to open the developer menu.</Text>
// </View>

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
