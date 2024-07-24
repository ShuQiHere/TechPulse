
var app = angular.module('loginApp', []);

app.controller('LoginCtrl', function($scope, $window) {
  $scope.username = '';
  $scope.password = '';

  $scope.login = function() {
    // 简单的验证逻辑，可以根据需要进行扩展
    if ($scope.username === 'admin' && $scope.password === 'password') {
      $window.location.href = 'index.html';
    } else {
      alert('Invalid username or password');
    }
  };
});
