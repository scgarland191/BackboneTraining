/**
* main.js
*
* @description: Backbone 101 main script
* @author: Chad Garland
*/
(function () {
	'use strict';

	var Dashboard = require('./views/dashboard/dashboard.js'),
		Home = require('./views/home/home.js'),
		Header = require('./views/header/header.js'),
		Navigation = require('./views/navigation/navigation.js');

	var Application = Backbone.Router.extend({
		/**
		* Application.initialize()
		* @description: Sets up the header and naviation
		*/
		initialize: function() {

			this.elements = {
				$header: $('#header'),
				$navigation: $('#navigation'),
				$contentWrapper: $('#content-wrapper')
			}

			this.views = {};

			this.views.header = new Header({
				$el: $('#header')
			});

			this.views.navigation = new Navigation({
				$el: $('#navigation')
			});

			var headerHeight = this.elements.$header.css('height');
			this.elements.$contentWrapper.css('height', 'calc(100% - ' + headerHeight + ')')

			console.log('Application.initialize()')

			Backbone.history.start();
		},

		/**
		* Application.routes
		* @description: Declares application routes
		*/

		routes: {
			'': 'redirectToDashboard',
			'dashboard': 'renderDashboard',
			'home': 'renderHome'
		},

		/**
		* Application.redirectToDashboard()
		* @description: Redirects to dashboard if no route is specified
		*/

		redirectToDashboard: function() {
			window.location = '#/dashboard';
		},

		/**
		* Application.renderDashboard()
		* @description: Drwas the dashboard view
		*/

		renderDashboard: function() {
			if (!this.views.dashboard) {
				this.views.dashboard = new Dashboard({
					$el: $('#content')
				});
			} else {
				this.views.dashboard.render();
			}
		},

		renderHome: function() {
			if (!this.views.home) {
				this.views.home = new Home({
					$el: $('#content')
				});
			} else {
				this.views.home.render();
			}
		}

	});

	var Backbone101 = new Application();
	console.log('Backbone101', Backbone101);

})();