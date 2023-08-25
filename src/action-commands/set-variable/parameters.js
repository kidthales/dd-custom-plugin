var _paramHelper = require('@dd/common').paramHelper;

var _ids = {
  objectInstanceMode: 1,
  objectInstanceModeUseSelf: -2,
  objectInstanceModeUseParent: -7,

  variable: 2,
  variableSource: 102
};

module.exports = {
  ids: _ids,
  entries: [
    _paramHelper.hr,
    _paramHelper.customId(
      _ids.objectInstanceMode,
      'PARAM_OBJECT_INSTANCE_MODE',
      [
        { id: _ids.objectInstanceModeUseSelf, name: 'SELF' },
        { id: _ids.objectInstanceModeUseParent, name: 'PARENT' }
      ],
      _ids.objectInstanceModeUseSelf
    ),
    _paramHelper.br,
    _paramHelper.switchVariableObjectId(_ids.variableSource, 'PARAM_VARIABLE_SOURCE', ['SelfObject', 'ParentObject']),
    _paramHelper.variableId(_ids.variable, 'PARAM_VARIABLE', _ids.variableSource, true),
    _paramHelper.hr
  ]
};
