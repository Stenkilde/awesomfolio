(function () {
	'use strict';

	angular
		.module('portfolio')
		.controller('Portfolio', Portfolio);

	/* @ngInject */
	function Portfolio(PortfolioFactory) {
		/*jshint validthis: true */
		var vm 		= this;

		activate();

		function activate() {
			return PortfolioFactory.getPortfolio().then(function (results) {
				vm.portfolios = results.data;
			});
		}

	}

})();
