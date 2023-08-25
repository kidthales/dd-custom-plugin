/**
 * @param {import('@dd/common/plugin/types').ActionCommandPayload} payload
 * @returns {import('@pgmmv/agtk/constants/action-commands/command-behavior').AgtkCommandBehavior['CommandBehaviorNext']} Command behavior 'next'.
 */
module.exports = function handler(
  /** @type {import('@dd/common/plugin/types').ActionCommandPayload} */
  payload
) {
  var paramIds = require('./parameters').ids;
  require('../../api').setDelta(payload.param[paramIds.delta]);
  return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
};
