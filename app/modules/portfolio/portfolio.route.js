(function() {
	'use strict';

	angular.module('portfolio')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Index = {
				name: 'application.portfolio',
				url: '/',
				views: {
					'main@application': {
						templateUrl: 'modules/portfolio/index/portfolio.template.html',
						controller: 'Portfolio',
						controllerAs: 'portfolio'
					}
				}
			};

			var View = {
				name: 'application.portfolioview',
				url: '/portfolio/:id',
				views: {
					'main@application': {
						templateUrl : 'modules/portfolio/view/view.template.html',
						controller  : 'PortfolioView',
						controllerAs: 'view'
					}
				}
			};

			var Edit = {
				name: 'application.portfolioadd',
				url: '/create',
				views: {
					'main@application': {
						templateUrl: 'modules/portfolio/edit/edit.template.html',
						controller: 'PortfolioEdit',
						controllerAs: 'edit'
					}
				}
			};

			$stateProvider.state(Index);
			$stateProvider.state(View);
			$stateProvider.state(Edit);
		});
})();
