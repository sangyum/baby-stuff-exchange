const React = require("react");
const { StyleSheet, Text, View } = require("react-native");

function Main({ firebase }) {
  return (
    <View style={styles.container}>
      <Text>Main Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

module.exports = {
  Main
};
