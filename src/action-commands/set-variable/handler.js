/**
 * @param {import('@dd/common/plugin/types').ActionCommandPayload} payload
 * @returns {import('@pgmmv/agtk/constants/action-commands/command-behavior').AgtkCommandBehavior['CommandBehaviorNext']} Command behavior 'next'.
 */
module.exports = function handler(
  /** @type {import('@dd/common/plugin/types').ActionCommandPayload} */
  payload
) {
  var paramIds = require('./parameters').ids;

  var objectInstance = dd.core.util.resolveSwitchVariableObject(
    payload.param[paramIds.objectInstanceMode],
    payload.instanceId
  );

  if (objectInstance) {
    var source = dd.core.util.resolveSwitchVariableObject(payload.param[paramIds.variableSource], objectInstance.id);

    if (source) {
      var variable = dd.core.util.resolveVariable(source, payload.param[paramIds.variable]);

      if (variable) {
        require('../../api').setVariable(variable);
      }
    }
  }

  return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
};
