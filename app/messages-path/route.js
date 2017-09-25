import Ember from 'ember';

export default Ember.Route.extend({
    
    hl7Server: Ember.inject.service(),

    beforeModel() {
        if (this.get('hl7Server.messagesPath')) {
            this.transitionTo('messages');
        }
    },
    
    
    actions: {
        setPath(messagesPath) {
            this.get('hl7Server').set('messagesPath', messagesPath);
            this.transitionTo('messages');
        }
    }

});
