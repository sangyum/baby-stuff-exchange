const React = require("react");
const { Main } = require("../main");
const { SignIn } = require("./sign-in");

function Auth({ isAuthenticated }) {
  if (isAuthenticated) {
    return <Main />;
  } else {
    return <SignIn />;
  }
}

module.exports = {
  Auth
};
