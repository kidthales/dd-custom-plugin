var _paramHelper = require('@dd/common').paramHelper;

var _ids = { delta: 1 };

module.exports = {
  ids: _ids,
  entries: [_paramHelper.hr, _paramHelper.number(_ids.delta, 'PARAM_DELTA', 1, { decimals: 2 }), _paramHelper.hr]
};
