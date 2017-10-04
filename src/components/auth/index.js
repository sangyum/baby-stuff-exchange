const React = require("react");
const { Main } = require("../main");
const { SignIn } = require("./sign-in");

// If authenticated, route to main Page
// if not authenticated, display sign-in Page

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
