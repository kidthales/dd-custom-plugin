var _commonApi = require('@dd/common');

var parameters = require('./parameters');
var api = require('./api');

/** @type {import('@dd/common/plugin/types').Config} */
var config = {
  dependencies: ['core'],
  parameters: parameters,
  actionCommands: require('./action-commands'),
  linkConditions: require('./link-conditions'),
  api: api,
  locale: require('./locale')
};

/** @type {import('@dd/common/plugin/types').Internal<{count: number}>} */
var internal = {
  data: { count: 0 },
  onInitialize: function () {
    dd.core.log('My custom plugin initialized.');
  },
  onFinalize: function () {
    dd.core.log('My custom plugin finalized.');
  },
  onSetParamValue: function (paramValue) {
    api.setDelta(paramValue[parameters.ids.delta]);
  }
};

var plugin = _commonApi.createPlugin('custom', config, internal);

//plugin.update = function (delta) {};

module.exports = plugin;
