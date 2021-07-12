const { verifyIdToken } = require("./auth");
const { getAuthToken } = require("./get-auth-token");

module.exports = {
  verifyAuthToken: verifyIdToken,
  getAuthToken: getAuthToken,
};
