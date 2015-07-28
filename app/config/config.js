var app = angular.module('portfolio', ['ui.router', 'mm.foundation']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
});
