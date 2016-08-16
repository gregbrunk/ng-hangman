console.log('app.js loaded!');

angular.module("hangmanApp", [])
	.controller("HangmanController", HangmanController);

HangmanController.$inject = ['$scope'];
function HangmanController ($scope) {
  $scope.hangman = new HangmanGame("elephant");

  $scope.Letter = function(input) {
    var lowerCaseInput = input.toLowerCase();
    $scope.hangman.guess(lowerCaseInput);
    $scope.hangman.input = "";
  };
}
