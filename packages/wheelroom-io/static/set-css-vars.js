
  /**
   * @license
   * author: Wheelroom (https://www.wheelroom.io)
   * wheelroom-io/static/set-css-vars v6.25.3
   * Released under the MIT license.
   */

(function (factory) {
   typeof define === 'function' && define.amd ? define(factory) :
   factory();
}((function () { 'use strict';

   /**
       * @license
       * author: Wheelroom (https://www.wheelroom.io)
       * css-theme v6.24.5
       * Released under the MIT license.
       */
      
   var camelToDash = function (str) {
       return str
           .replace(/\W+/g, '-')
           .replace(/([a-z\d])([A-Z])/g, '$1-$2')
           .toLowerCase();
   };

   var cssObjToVars = function (_a) {
       var obj = _a.obj, cssVars = _a.cssVars, prefix = _a.prefix;
       cssVars = cssVars || {};
       prefix = prefix || '';
       Object.entries(obj).map(function (_a) {
           var name = _a[0], value = _a[1];
           if (typeof value === 'object') {
               cssObjToVars({
                   obj: value,
                   cssVars: cssVars,
                   prefix: "" + prefix + (prefix && '-') + camelToDash(name),
               });
           }
           else {
               cssVars["--" + prefix + (prefix && '-') + camelToDash(name)] = value;
           }
       });
       return cssVars;
   };

   var setCssVars = function (_a) {
       var theme = _a.theme;
       var cssVars = cssObjToVars({ obj: theme });
       Object.entries(cssVars).forEach(function (_a) {
           var key = _a[0], value = _a[1];
           return document.documentElement.style.setProperty(key, value);
       });
   };

   var theme = {
       colors: {
           berry: '#FF8582',
           orange: '#FF9858',
           mango: '#FFAC31',
           banana: '#FFBF00',
           kiwi: '#D5CF00',
           apple: '#A4DB2A',
           melon: '#66E355',
       },
   };

   setCssVars({ theme: theme });

})));
