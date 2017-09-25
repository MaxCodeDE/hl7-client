import Ember from 'ember';

export default Ember.Route.extend({

    hl7Server: Ember.inject.service(),
    
    actions: {
        goTo(route) {
            this.transitionTo(route);
        }
    }

});