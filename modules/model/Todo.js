define(function(require, exports, module) {

	// var TodoList = require('model/TodoList');

	var Todo = Backbone.Model.extend({

		// localStorage: new Backbone.LocalStorage("todos-backbone"),
		
		counter : 0,
		// Default attributes for the todo item.
		defaults: function() {
			return {
				title: "empty todo...",
				order: ++this.counter,
				done: false
			};
		},

		// Toggle the `done` state of this todo item.
		toggle: function() {
			this.save({
				done: !this.get("done")
			});
		}

	});
	module.exports = Todo;
});