import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('messages');
  this.route('messages-path');
  this.route('messages-settings');
  this.route('messages-new');
  this.route('messages-log');
});

export default Router;
