(function () {
	'use strict';

	angular
		.module('portfolio')
		.controller('PortfolioView', PortfolioView);

	/* @ngInject */
	function PortfolioView(PortfolioFactory, $state, $stateParams) {
		/*jshint validthis: true */
		var vm 		= this;

		activate();

		function activate() {
			PortfolioFactory.getSingle($stateParams.id).then(function (results) {
				vm.portfolio = results;
				console.log(vm.portfolio);
			});
		}

	}

})();
