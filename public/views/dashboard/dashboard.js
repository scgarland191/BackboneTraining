var fs = require('fs');

module.exports = Backbone.View.extend({
	/**
	* Dashboard.initialize()
	* @description: Loads template and renders view
	* @param: {Object} options
	*/

	initialize: function(options) {
		_.extend(this, options);

		var fileContents = fs.readFileSync(__dirname + '/dashboard.tmpl', 'utf-8')
		this.template = _.template(fileContents);
		this.render();
	},

	render: function() {
		var html = this.template();

		this.$el.html(html);
		this.delegateEvents();
	}
})