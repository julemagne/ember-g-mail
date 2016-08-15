import Ember from 'ember';

const { set } = Ember;

export default Ember.Route.extend({
  model({ mailId }) {
    return this.modelFor('folder')[mailId-1];
  },
  serialize(model) {
    return { mailId: model.id };
  },
    afterModel(model) {
    // Ember.set(model, 'readDate', new Date()); // same
    // model.set('readDate', new Date();) // same
    set(model, 'readDate', new Date());
  }
});
