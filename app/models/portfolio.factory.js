(function () {
	'use strict';

	angular
		.module('portfolio')
		.factory('PortfolioFactory', PortfolioFactory);

	/* @ngInject */
	function PortfolioFactory($http, $q) {

		var service = {
			getPortfolio: 	getPortfolio,
			getSingle:		getSingle,
			addPortfolio:	addPortfolio
		};

		return service;

		function addPortfolio(article) {
			var deferred = $q.defer();

			var url = '/api/portfolios';

			var storesPromise = $http.post(url,article).then(function(results) {
				deferred.resolve(results);
			}, function(err) {
				deferred.reject(err);
			});
			return deferred.promise;
		}

		function getSingle(id) {
			var deferred = $q.defer();

			var url = '/api/portfolio/' + id;

			var portfolioPromise = $http.get(url, id);

			portfolioPromise.then(function(results) {
				deferred.resolve(results);
			}, function(err) {
				deferred.reject(err);
			});

			return deferred.promise;
		}

		function getPortfolio() {
			var deferred = $q.defer();

			var url = '/api/portfolios';

			var storesPromise = $http.get(url);

			storesPromise.then(function(results) {

				deferred.resolve(results);
			}, function(err) {
				deferred.reject(err);
			});

			return deferred.promise;
		}

	}

})();
