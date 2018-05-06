(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!

	var myApp = angular.module('myApp',[]);
	myApp.controller('toDoController',['$scope',function ($scope) {
		$scope.text = '';

		$scope.todos = [
			{
				id : 1,
				text : 'AngularJS',
				completed : true
			},{
				id : 2,
				text : 'vueJS',
				completed: false
			},{
				id : 3,
				text : 'Echarts',
				completed : false
			}
		];

		$scope.add = function () {
			if(!$scope.text){
				return;
			};
			var newToDo = {
				id : Math.random(),
				text : $scope.text,
				completed : false
			};

			$scope.todos.push(newToDo);
			$scope.text = '';

		}

		$scope.destroy = function (id) {
			for (var i = 0; i < $scope.todos.length;i++){
				if($scope.todos[i].id === id){
					$scope.todos.splice(i,1);
				}
			}
		}

		$scope.clear = function () {
			var newToDos =[];
			for (var i = 0; i < $scope.todos.length;i++){
					if($scope.todos[i].completed == false){
						newToDos.push($scope.todos[i]);
					}
			}
			$scope.todos = newToDos;
		}

		$scope.currentEditingId = -1;

		$scope.editing = function (id) {
			$scope.currentEditingId = id;
		}

		$scope.save = function () {
			$scope.currentEditingId = -1;
		}

		$scope.isCompleted = function () {
			for(var i = 0; i < $scope.todos.length;i++){
				if($scope.todos[i].completed === true){
					return true;
				}
			}
			return false;
		}

		$scope.isSelectedAll = false;
		$scope.selectAll = function () {
			for(var i = 0;i<$scope.todos.length;i++){
				$scope.todos[i].completed = !$scope.isSelectedAll;
			}
			$scope.isSelectedAll = !$scope.isSelectedAll;
		}
	}])
})(angular);
