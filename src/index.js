'use strict';
var ga = require('./ga');


function analytics(state, options) {
  if (!options) {
    options = {};
  }
  options.page = state.pathname;
  ga('send', {
    hitType: 'pageview',
    page: options.pathname,
    location: window.location.href
  }, options);
}


module.exports = analytics;
