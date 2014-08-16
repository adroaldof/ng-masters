mainApp.controller('AngulifeCtrl', ['$scope', '$interval', function($scope, $interval) {

  //----- Variable declaration
  $scope.rowNumber = 10;
  $scope.colNumber = 10;

  $scope.gameTable = [];
  $scope.gameTableAux = [];

  $scope.liveOnes = 0;
  $scope.generationCount = 0;
  $scope.promisseAutoExec = null;
  $scope.stepInterval = 1;


  //----- Accessible functions
  $scope.mountGrid = function() {
    $scope.gameTable = [];
    $scope.generationCount = 0;

    for (var i = 0; i < $scope.rowNumber; i++) {
      $scope.gameTable.push({
        cols: []
      });

      for (var j = 0; j < $scope.colNumber; j++) {
        $scope.gameTable[i]['cols'].push({
          lifeStatus: false
        });
      }
    }
  };


  $scope.toggleLifeStatus = function(column) {
    column.lifeStatus = !column.lifeStatus;

    if (column.lifeStatus) {
      $scope.liveOnes++;
    } else {
      $scope.liveOnes--;
    }
  };


  $scope.step = function() {
    if ($scope.gameTable.length <= 0) {
      if ($scope.promisseAutoExec !== null) {
        $scope.mountGrid();
      }
    }

    if ($scope.liveOnes >= 1) {
      $scope.generationCount++;
      _calculateNewState();
    } else {
      $scope.stopAuto();
      $scope.mountGrid();
    }
  };


  $scope.stepAuto = function () {
    var stepInterval = $scope.stepInterval * 1000;
    $scope.promisseAutoExec = $interval(function(){
      $scope.step();
    }, stepInterval);
  };


  $scope.stopStepAuto = function () {
    $interval.cancel($scope.promisseAutoExec);
    $scope.promisseAutoExec = null;
  };


  $scope.reset = function () {
    $scope.mountGrid();
  };


  //----- Helper functions
  var _calculateNewState = function() {
    $scope.liveOnes = 0;

    for (var row in $scope.gameTable) {
      $scope.gameTableAux.push({
        cols: []
      });

      for (var col in $scope.gameTable[row].cols) {
        var life = $scope.gameTable[row]['cols'][col]['lifeStatus'];
        var neighbors = _getNumberOfNeighbors(row, col);

        if (life) {
          if (neighbors < 2 || neighbors > 3) {
            life = false;
          } else if (neighbors >= 2 || neighbors <= 3) {
            life = true;
          }
          $scope.liveOnes++;
        } else if (neighbors === 3) {
          life = true;
        }

        $scope.gameTableAux[row]['cols'].push({
          lifeStatus: life
        });
      }
    }

    $scope.gameTable = $scope.gameTableAux;
    $scope.gameTableAux = [];
  };


  var _getNumberOfNeighbors = function(row, col) {
    var _row = parseInt(row, 10),
        _col = parseInt(col, 10),
        neighbors = 0;

    if (_isAlive(_row - 1, _col - 1)) {
      neighbors++;
    }
    if (_isAlive(_row - 1, _col)) {
      neighbors++;
    }
    if (_isAlive(_row - 1, _col + 1)) {
      neighbors++;
    }
    if (_isAlive(_row, _col - 1)) {
      neighbors++;
    }
    if (_isAlive(_row, _col + 1)) {
      neighbors++;
    }
    if (_isAlive(_row + 1, _col - 1)) {
      neighbors++;
    }
    if (_isAlive(_row + 1, _col)) {
      neighbors++;
    }
    if (_isAlive(_row + 1, _col + 1)) {
      neighbors++;
    }

    return neighbors;
  };


  var _isAlive = function(row, col) {
    var _row = parseInt(row, 10),
        _col = parseInt(col, 10);

    if ((_row >= 0) && (_col >= 0) && (_row < $scope.rowNumber) && (_col < $scope.colNumber)) {
      return $scope.gameTable[row]['cols'][col]['lifeStatus'];
    } else {
      return false;
    }
  };


  // Mount grid on load page
  $scope.mountGrid();
}]);
