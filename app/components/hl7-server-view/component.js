import Ember from 'ember';

export default Ember.Component.extend({
    
    hl7Server: Ember.inject.service(),
    
    prefix: '',
    
    serverSettings: Ember.computed('hl7Server.{serverIp,serverPort}', function() {
        return `${this.get('hl7Server.serverIp')}:${this.get('hl7Server.serverPort')}`;
    })
});
