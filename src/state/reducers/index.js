const { combineReducers } = require("redux");
const { app } = require("./app");

const rootReducer = combineReducers({ app });

module.exports = rootReducer;
