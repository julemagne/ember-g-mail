import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		// showEmail: function(email) { // same
		showEmail(email) {
			this.transitionToRoute('folder.mail', email);
		}
	}
});