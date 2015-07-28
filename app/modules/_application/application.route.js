(function() {
	'use strict';

	angular.module('portfolio')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Application = {
				name: 'application',
				abstract: true,
				views : {
					// Wrapping view
					'application': {
						templateUrl: 'modules/_application/application.template.html'
					},
					// Topbar
					'topbar@application': {
						templateUrl: 'modules/topbar/topbar.template.html',
						controller: 'Topbar',
						controllerAs: 'topbar'
					},
					// About
					'about@application': {
						templateUrl: 'modules/about/about.template.html',
						controller: 'About',
						controllerAs: 'about'
					}
				}
			};


			$stateProvider.state(Application);
		});
})();
