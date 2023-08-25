var _paramHelper = require('@dd/common').paramHelper;

var _ids = { value: 1 };

module.exports = {
  ids: _ids,
  entries: [_paramHelper.hr, _paramHelper.number(_ids.value, 'PARAM_VALUE', 0, { decimals: 2 }), _paramHelper.hr]
};
