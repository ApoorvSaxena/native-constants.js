/*! native-constants.js - v0.0.1 - 2015-12-21
* Copyright (c) 2015 Apoorv Saxena; Licensed MIT */

;(function () {
  'use strict';

  var NativeConstants = (function() {

    var iframe,
        iframeContentWindow;

    iframe = window.document.createElement('iframe');
    iframe.style.display = "none";
    window.document.getElementsByTagName('head')[0].appendChild(iframe);
    iframeContentWindow = iframe.contentWindow;

    var get = function(constantName) {
      return iframeContentWindow[constantName];
    };

    return {
      get: get
    };

  })();

  // open to the world.
  // commonjs
  if( typeof exports === 'object' )  {
    module.exports = NativeConstants;
  }
  // AMD module
  else if( typeof define === 'function' && define.amd ) {
    define(function () {
      return NativeConstants;
    });
  }
  // Browser global
  else {
    window.NativeConstants = NativeConstants;
  }

})();