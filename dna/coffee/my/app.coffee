define ['my/tpl', 'angular'], (tpl, angular) ->
	'use strict'

	# Declare app level module which depends on filters, and services
	angular.module('App', [])
	.config(['$routeProvider', ($routeProvider) ->
		$routeProvider.when('/demo/bs/:catSubCat', {templateUrl: 'tpl/bs/demo.html', controller: 'BsDemoCtrl'})
		$routeProvider.when('/view1', {templateUrl: 'tpl/partial1.html', controller: 'MyCtrl1'})
		$routeProvider.when('/view2', {templateUrl: 'tpl/partial2.html', controller: 'MyCtrl2'})
		$routeProvider.otherwise({redirectTo: '/demo/bs/button-groups'})
	])
	.controller('AppCtrl', ['$scope', ($scope) ->
		$scope.site =
			title: 'Get Angular!',
			user: 'Paolo'
	])
	.controller('BsDemoCtrl', ['$scope', '$routeParams', '$location', ($scope, $routeParams, $location) ->
		$scope.templates = [
			{ name: 'button-defaults', url: 'tpl/bs/button-defaults.html'}
			{ name: 'button-groups', url: 'tpl/bs/button-groups.html'}
			{ name: 'button-sizes', url: 'tpl/bs/button-sizes.html'}
			{ name: 'button-dropdowns', url: 'tpl/bs/button-dropdowns.html'}
			{ name: 'button-dropups', url: 'tpl/bs/button-dropups.html'}
			{ name: 'button-others', url: 'tpl/bs/button-others.html'}
		]

		$scope.$watch 'template', ->
			$location.path('/demo/bs/'+$scope.template.name)		

		for template in $scope.templates then do (template) =>
			if template.name is $routeParams.catSubCat then $scope.template = template

		$scope.template = $scope.templates[0] if (! $scope.template) 


		$scope.isActive = (tFileName) ->
			return tFileName is $scope.template.name
			


		$scope.page =
			title: 'Buttons'
	])
	.controller('MyCtrl1', [->])
	.controller('MyCtrl2', [->])

	# when all is done, execute bootstrap angular application
	return angular.bootstrap(document, ['App'])
