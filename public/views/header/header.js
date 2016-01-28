/**
* views/header/header.js
*
* @description: Header view 
* @author: Chad Garland
*/

var fs = require('fs');

module.exports = Backbone.View.extend({
	/**
	* Header.initialize()
	* @description: Loads template and renders view
	* @param: {Object} options
	*/
	initialize: function(options) {
		_.extend(this, options);

		var fileContents = fs.readFileSync(__dirname + '/header.tmpl', 'utf-8');
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