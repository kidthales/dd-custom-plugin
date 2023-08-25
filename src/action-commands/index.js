// Order must be maintained or existing projects will break (when they upgrade).
module.exports = [
  require('./set-delta'),
  require('./increment'),
  require('./decrement'),
  require('./reset'),
  require('./set-variable')
];
