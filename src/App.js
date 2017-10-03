import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MKButton } from 'react-native-material-kit'

const ColoredRaisedButton = MKButton.coloredButton()
  .withText('SIGN IN')
  .withOnPress(() => {
    console.log('HI')
  })
  .build()
  
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Baby Stuff Exchange</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <ColoredRaisedButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
