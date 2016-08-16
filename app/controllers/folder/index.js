import Ember from 'ember';

const { get, set } = Ember;

export default Ember.Controller.extend({
	actions: {
		showEmail(email) {
			this.transitionToRoute('folder.mail', email);
		},
    trashBulk() {
    	const results = get(this, 'model').filter((item) => {
    		return get(item, 'checked');
    	});
    	// ES6 way:
    	// const results = get(this, 'model').filter(item => get(item, 'checked'));
    	results.forEach((result) => {
    		set(result, 'trashedDate', new Date());
    		set(result, 'checked', false);
    	});
    	this.transitionToRoute('application');
    }
	}
});