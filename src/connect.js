'use strict'

function connect(firstString, secondString, connector) {

  const isConnected = !!(secondString && firstString);
  const connection = isConnected ? connector : '';
  const partialNumberWord = firstString + connection + secondString;
  return { partialNumberWord, isConnected }
};

module.exports = connect;
