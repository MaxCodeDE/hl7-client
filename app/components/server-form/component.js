import Ember from 'ember';

export default Ember.Component.extend({
        
    hl7Server: Ember.inject.service(),
    
    actions: {
        setServerSettings() {
            this.get('hl7Server').set('serverIp', this.get('serverIp'));
            this.get('hl7Server').set('serverPort', this.get('serverPort'));
        }
    }
});
