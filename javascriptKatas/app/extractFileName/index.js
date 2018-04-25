'use strict';

const extractFileName = dirtyFileName => dirtyFileName.match(/_[\w-]*.\w*/g)[0].substring(1);

module.exports = {
  extractFileName,
};
