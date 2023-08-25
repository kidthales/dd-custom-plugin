var _commonApi = require('@dd/common');

var _delta = 1;

module.exports = {
  getDelta: function () {
    return _delta;
  },

  setDelta: function (
    /** @type {number} */
    delta
  ) {
    _delta = delta;
  },

  increment: function () {
    _commonApi.getInternalData().count += _delta;
  },

  decrement: function () {
    _commonApi.getInternalData().count -= _delta;
  },

  reset: function () {
    _commonApi.getInternalData().count = 0;
  },

  setVariable: function (
    /** @type {import('@pgmmv/agtk/variables/variable').AgtkVariable|import('@pgmmv/agtk/object-instances/object-instance/variables/variable').AgtkVariable} */
    variable
  ) {
    variable.setValue(_commonApi.getInternalData().count);
  },

  isEqualTo: function (
    /** @type {number} */
    value
  ) {
    return _commonApi.getInternalData().count === value;
  },

  isLessThan: function (
    /** @type {number} */
    value
  ) {
    return _commonApi.getInternalData().count < value;
  },

  isGreaterThan: function (
    /** @type {number} */
    value
  ) {
    return _commonApi.getInternalData().count > value;
  }
};
