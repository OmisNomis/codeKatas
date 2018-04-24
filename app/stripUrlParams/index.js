'use strict';

const stripUrlParams = (url, paramsToStrip) => {
  const params = url.split('?');
  if (params.length === 1) return url;

  let paramKeyArr = [];
  let paramsArr = [];

  params[1]
    .split('&')
    .filter(p => {
      return paramsToStrip ? paramsToStrip.indexOf(p[0]) === -1 : p;
    })
    .forEach(k => {
      if (paramKeyArr.indexOf(k[0]) === -1) {
        paramKeyArr.push(k[0]);
        paramsArr.push(k);
      }
    });
  return `${params[0]}?${paramsArr.join('&')}`;
};

module.exports = {
  stripUrlParams,
};
