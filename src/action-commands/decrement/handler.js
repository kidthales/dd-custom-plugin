/**
 * @returns {import('@pgmmv/agtk/constants/action-commands/command-behavior').AgtkCommandBehavior['CommandBehaviorNext']} Command behavior 'next'.
 */
module.exports = function handler() {
  require('../../api').decrement();
  return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
};
