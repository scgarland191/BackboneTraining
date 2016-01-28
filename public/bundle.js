(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./views/dashboard/dashboard.js":2,"./views/header/header.js":3,"./views/home/home.js":4,"./views/navigation/navigation.js":5}],2:[function(require,module,exports){


module.exports = Backbone.View.extend({
	/**
	* Dashboard.initialize()
	* @description: Loads template and renders view
	* @param: {Object} options
	*/

	initialize: function(options) {
		_.extend(this, options);

		var fileContents = "<div id=\"dashboard\" class=\"row\">\n\t<h1>Dashboard</h1>\n</div>"
		this.template = _.template(fileContents);
		this.render();
	},

	render: function() {
		var html = this.template();

		this.$el.html(html);
		this.delegateEvents();
	}
})
},{}],3:[function(require,module,exports){
/**
* views/header/header.js
*
* @description: Header view 
* @author: Chad Garland
*/



module.exports = Backbone.View.extend({
	/**
	* Header.initialize()
	* @description: Loads template and renders view
	* @param: {Object} options
	*/
	initialize: function(options) {
		_.extend(this, options);

		var fileContents = "<div class=\"col-xs-12\">\n\t<h1 class=\"text-center\">Header</h1>\n</div>";
		this.template = _.template(fileContents);
		this.render();
	},

	/**
	* Header.render()
	* @description: Draws the view
	*/
	render: function() {

		var params = {
			messages: [{ char: 'a'}, {char: 'b'}, {char: 'c'}]
		};

		var html = this.template(params);

		this.$el.html(html);

		this.delegateEvents();
	},
	/**
	* Header.events
	* @description: Declares view click events
	*/
	events: {
		'click #header-button': 'clickedButton'
	},

	/**
	* Header.clickedButton()
	* @description: Display alert on button click
	* @param: {Object} event
	*/
	clickedButton: function(event) {
		console.log('Header.clickedButton() event ==', event);

		var target = event.target,
			foo2 = target.dataset.char;

		alert('You clicked this button: ' + foo2);
	}
})
},{}],4:[function(require,module,exports){


module.exports = Backbone.View.extend({
	initialize: function(options) {
		_.extend(this, options);

		var fileContents = "<div id=\"home\" class=\"row\">\n\t<h1>Home</h1>\n</div>"
		this.template = _.template(fileContents);
		this.render();
		console.log("Home.init",this)
	},

	render: function() {
		var html = this.template();

		this.$el.html(html);
		this.delegateEvents();
		console.log("Home.render",this)
	}
})
},{}],5:[function(require,module,exports){


module.exports = Backbone.View.extend({
	/**
	* Navigation.initialize()
	* @description: Loads template and renders view
	* @param: {Object} options
	*/
	initialize: function(options) {
		_.extend(this, options);

		var fileContents = "<h1>Navigation</h1>\n\n<ul>\n\t<li><a href=\"#/dashboard\">Dashboard</a></li>\n\t<li><a href=\"#/home\">Home</a></li>\n</ul>"
		this.template = _.template(fileContents);
		this.render();
	},

	render: function() {
		var html = this.template();

		this.$el.html(html);
		this.delegateEvents();
	}

})
	
},{}]},{},[1]);
