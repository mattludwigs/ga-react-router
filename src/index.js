'use strict';
var ga = require('./ga');

function analytics(state, options) {
  if (!options) {
    options = {};
    options.page = state.pathname;
    options.location = window.location.href;
    options.hitType = 'pageview';
  }

  ga('send', options);
}


module.exports = analytics;
