/**
 * @returns {import('@pgmmv/agtk/constants/action-commands/command-behavior').AgtkCommandBehavior['CommandBehaviorNext']} Command behavior 'next'.
 */
module.exports = function handler() {
  require('../../api').reset();
  return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
};
