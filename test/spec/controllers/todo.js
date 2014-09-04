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
    scope.checkAll();

    scope.todos.forEach (function (item) {
      if (item.completed) {
        completed++;
      }
    });

    expect(completed).toBe(4);
  });

  it('should set editing property as true', function() {
    scope.editTodo(scope.todos[0]);
    expect(scope.todos[0].editing).toBe(true);
  });

  it('should set editing property back as false', function() {
    scope.editTodo(scope.todos[0]);
    scope.doneEditing(scope.todos[0]);
    expect(scope.todos[0].editing).toBe(false);
  });

  it('should revert back to original todo', function() {
    scope.editTodo(scope.todos[0]);
    var originalTodo = scope.originalTodo;
    scope.todos[0].title = 'Some test';
    scope.doneEditing(scope.todos[0]);
    scope.revertEditing(scope.todos[0]);
    expect(scope.todos[0]).toBe(originalTodo);
  });

});
