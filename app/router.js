import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('folder', { path: ':folderName' }, function() {
    this.route('mail', { path: ':mailId' });
  });
});

export default Router;
