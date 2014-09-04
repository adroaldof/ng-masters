'use strict';
(function () {
  angular.module('AngApp').controller('TodoCtrl', ['$scope', function ($scope) {

    var todos = $scope.todos = [
      {title: 'Reservar salão de festas', completed: false, editing: false},
      {title: 'Comprar Bebidas', completed: false, editing: false},
      {title: 'Coprar carne', completed: false, editing: false},
      {title: 'Carvão', completed: true, editing: false}
    ];

    $scope.addTodo = function () {
      var newTodo = $scope.newTodo.trim();

      if (!newTodo.length) {
        return;
      }

      todos.push({
        title: newTodo,
        completed: false,
        editing: false
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

    $scope.editTodo = function (todo) {
      todo.editing = true;
      $scope.originalTodo = angular.extend({}, todo);
    };

    $scope.doneEditing = function (todo) {
      todo.title = todo.title.trim();

      if (!todo.title) {
        $scope.removeTodo(todo);
      }

      todo.editing = false;
    };

  }]);
})();
