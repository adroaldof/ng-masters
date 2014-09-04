'use strict';

(function () {
  angular.module('AngApp').directive('todoFocus', ['$timeout', function ($timeout) {

    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        scope.$watch(attrs.todoFocus, function (value) {

          if (value) {
            $timeout(function () {
              elem[0].focus();
            }, 0, false);
          }

        });
      }
    };

  }]);
})();
