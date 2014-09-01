'use strict';

describe('Controller: TodoCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('AngApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(angular.mock.inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('TodoCtrl', {
      $scope: scope
    });
  }));

  it('should have a todos list with four items', function () {
    expect(scope.todos.length).toBe(4);
  });

  it('should add a new todo on todos', function () {
    scope.newTodo = 'New todo';
    scope.addTodo();
    expect(scope.todos.length).toEqual(5);
  });

  it('should delete one todo item on todos list', function () {
    scope.removeTodo(scope.todos[0]);
    expect(scope.todos.length).toBe(3);
  });

  it('should mark all items as completed', function () {
    var completed = 0;
    scope.markAll();

    scope.todos.forEach (function (item) {
      if (item.completed) {
        completed++;
      }
    });

    expect(completed).toBe(4);
  });

});
