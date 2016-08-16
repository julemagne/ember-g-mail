import Ember from 'ember';

const { get } = Ember;

export default Ember.Route.extend({
  mailLookup: Ember.inject.service(),
  tagging: Ember.inject.service(),

  model({ folderName }) {
    return this.get('mailLookup').fetch(folderName).then(() => {
      return { folderName };
    });
  },

  actions:  {
    moveToTrash(email) {
      return get(this, 'tagging').addTag(email, 'trashed').then(() => {
        this.transitionTo('application');
      });
    },
    toggleStar(email) {
      return get(this, 'tagging').toggleTag(email, 'starred');
    }
  }
});
