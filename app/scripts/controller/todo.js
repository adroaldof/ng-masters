'use strict';
(function () {
  angular.module('AngApp').controller('TodoCtrl', ['$scope', function ($scope) {

    var todos = $scope.todos = [
      {title: 'Reservar salão de festas', completed: false},
      {title: 'Comprar Bebidas', completed: false},
      {title: 'Coprar carne', completed: false},
      {title: 'Carvão', completed: true}
    ];

    $scope.addTodo = function () {
      var newTodo = $scope.newTodo.trim();

      if (!newTodo.length) {
        return;
      }

      todos.push({
        title: newTodo,
        completed: false
      });

      delete $scope.newTodo;
    };

    $scope.removeTodo = function (todo) {
      todos.splice(todos.indexOf(todo), 1);
    };

    $scope.checkAll = function (completed) {
      todos.forEach(function (todo) {
        todo.completed = !completed;
      });
    };

  }]);
})();
