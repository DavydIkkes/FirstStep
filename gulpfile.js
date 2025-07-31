const { series } = require('gulp');

function clean(cb) {
  console.log('Cleaning up...');
  // Add your cleaning logic here
  cb();
}

exports.default = series(clean);