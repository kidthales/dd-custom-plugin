/**
 * @param {import('@dd/common/plugin/types').LinkConditionPayload} payload
 * @returns {boolean}
 */
module.exports = function handler(
  /** @type {import('@dd/common/plugin/types').LinkConditionPayload} */
  payload
) {
  var paramIds = require('./parameters').ids;
  return require('../../api').isGreaterThan(payload.param[paramIds.value]);
};
