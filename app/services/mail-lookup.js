import Ember from 'ember';
import moment from 'moment';

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

const { get, set } = Ember;

export default Ember.Service.extend({
  lookupFilters: {
    inbox: i => !get(i, 'trashedDate'),
    trash: i => get(i, 'trashedDate'),
  },
  retrieve(folderName) {
    return new Ember.RSVP.Promise((resolve) => {
      const lookupFilters = get(this, 'lookupFilters');

      for(var fn in lookupFilters) {
        const filter = lookupFilters[fn];
        const result = fixtures.filter(filter);

        set(this, `${fn}Count`, result.length);
        set(this, fn, result);
      }

      set(this, 'currentFolderName', folderName);

      resolve(get(this, folderName));
    });
  }

});
