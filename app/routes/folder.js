import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [
			{
				id: 1,
				from:'recruiter@startup.com',
				to:'dev@me.com',
				subject:'Opportunity',
				body:'Hello I have a job for you :)',
				sentAt: new Date(),
				readDate: null
			},
			{
				id: 2,
				from:'super_recruiter@startup.com',
				to:'dev@me.com',
				subject:'New Opportunity!!!',
				body:'Hello, I have a BETTER job for you! :)',
				sentAt: new Date(),
				readDate: null
			}
		];
	}
});
