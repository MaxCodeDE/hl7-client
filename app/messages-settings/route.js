import Ember from 'ember';

export default Ember.Route.extend({

    hl7Server: Ember.inject.service(),

    actions: {
        setServerSettings(serverIp, serverPort, hl7MessagePath) {
            this.get('hl7Server').set('serverIp', serverIp);
            this.get('hl7Server').set('serverPort', serverPort);
            this.get('hl7Server').set('messagesPath', hl7MessagePath);   
            
            Materialize.toast('Settings changed', 1000);
            
            this.transitionTo('messages');
        }
    }

});