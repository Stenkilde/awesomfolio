(function () {
	'use strict';

	angular
		.module('portfolio')
		.controller('PortfolioEdit', PortfolioEdit);

	/* @ngInject */
	function PortfolioEdit(PortfolioFactory, $state, $stateParams) {
		/*jshint validthis: true */
		var vm 		= this;
		vm.save		= save;

		activate();

		function activate() {

		}

		function save() {
			PortfolioFactory.addPortfolio({
				header: vm.header,
				body: vm.body,
				item: vm.item
			}).then(function(result) {
				console.log(result);
				$state.transitionTo($state.current, $stateParams, {
					reload: true,
					inherit: false,
					notify: true
				});
			});
		}
	}

})();
