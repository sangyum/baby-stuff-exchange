const { connect } = require("react-redux");
const { Auth: App } = require("../../components/auth");

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch, { fxns }) {
  return { fxns };
}

module.exports = {
  AppContainer: connect(mapStateToProps, mapDispatchToProps)(App)
};
