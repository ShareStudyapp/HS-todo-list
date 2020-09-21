// module.exports = function override(config, env) {
//   return config;
// }

const rewireLess = require("react-app-rewire-less")
module.exports = (config, env) => rewireLess(config, env)