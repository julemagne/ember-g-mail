import Ember from 'ember';

const fixtures = [
	{
		id: 1,
		from:'recruiter@startup.com',
		to:'dev@me.com',
		subject:'Opportunity',
		body:'Hello I have a job for you :)',
		sentAt: new Date(),
		readDate: null,
		trashedDate: null
	},
	{
		id: 2,
		from:'super_recruiter@startup.com',
		to:'dev@me.com',
		subject:'New Opportunity!!!',
		body:'Hello, I have a BETTER job for you! :)',
		sentAt: new Date(),
		readDate: null,
		trashedDate: null
	}
];

const { get } = Ember;

export default Ember.Route.extend({
	model() {
		return fixtures.filter(function(email) {
			return !get(email, 'trashedDate');
		});
	}
});
