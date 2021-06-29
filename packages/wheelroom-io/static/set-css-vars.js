
  /**
   * @license
   * author: Wheelroom (https://www.wheelroom.io)
   * wheelroom-io/static/set-css-vars v6.25.4
   * Released under the MIT license.
   */

(function (factory) {
   typeof define === 'function' && define.amd ? define(factory) :
   factory();
}((function () { 'use strict';

   /**
       * @license
       * author: Wheelroom (https://www.wheelroom.io)
       * css-theme v6.25.3
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
           amber: '#FCA623',
           azure: '#06C',
           black: '#000',
           bullet: '#666',
           caviar: '#222',
           ghost: '#111',
           grey: '#CCC',
           metal: '#AAA',
           ocean: '#0051A3',
           silver: '#EEE',
           skyblue: 'rgba(35, 122, 252, .1)',
           white: '#FFF',
       },
   };

   setCssVars({ theme: theme });

})));
