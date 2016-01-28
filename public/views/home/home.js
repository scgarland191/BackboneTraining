var fs = require('fs');

module.exports = Backbone.View.extend({
	initialize: function(options) {
		_.extend(this, options);

		var fileContents = fs.readFileSync(__dirname + '/home.tmpl', 'utf-8')
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