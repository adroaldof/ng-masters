'use strict';

(function () {
  angular.module('AngApp').directive('todoEscape', function () {

    var ESCAPE_KEY = 27;

    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        elem.bind('keyup', function (event) {
          if (event.keyCode === ESCAPE_KEY) {
            scope.$apply(attrs.todoEscape);
          }
        });
      }
    };

  });
})();
