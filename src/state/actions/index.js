const { map, zipObj, pipe } = require("ramda");

function buildAction(type) {
  return payload => ({
    type,
    payload
  });
}

const actionTypes = [];

const genFxns = map(buildAction);
const objectify = zipObj(actionTypes);

module.exports = pipe(genFxns, objectify)(actionTypes);
