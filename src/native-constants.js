;(function () {
  'use strict';

  NativeConstants = (function() {

    var iframe,
        iframeContentWindow;

    // Create iframe element
    iframe = window.document.createElement('iframe');
    // Hide the created iframe
    iframe.style.display = "none";
    // Append the iframe to the head of document
    window.document.getElementsByTagName('head')[0].appendChild(iframe);
    // Get access to the content window of the iframe
    iframeContentWindow = iframe.contentWindow;

    // Returns the native constant using the iframe's content window
    var get = function(constantName) {
      return iframeContentWindow[constantName];
    };

    // Allow access to get function
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
    define('NativeConstants', function () {
      return NativeConstants;
    });
  }
  // Browser global
  else {
    window.NativeConstants = NativeConstants;
  }

})();