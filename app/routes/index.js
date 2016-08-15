import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [
			{
				from:'recruiter@startup.com',
				to:'dev@me.com',
				subject:'Opportunity',
				body:'Hello I have a job for you :)',
				sentAt: new Date()
			},
			{
				from:'super_recruiter@startup.com',
				to:'dev@me.com',
				subject:'New Opportunity!!!',
				body:'Hello, I have a BETTER job for you! :)',
				sentAt: new Date()
			}
		];
	}
});
