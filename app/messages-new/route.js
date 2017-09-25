import Ember from 'ember';
var fs = requireNode('fs');

export default Ember.Route.extend({

    hl7Server: Ember.inject.service(),

    actions: {
        createHl7File(filename, message) {
            fs.writeFile(this.get('hl7Server.messagesPath') + "/" + filename, message, (err) => {
                if (err) {
                    return console.log(err);
                }
                this.transitionTo('messages');
            });
        },
        cancel() {
            this.transitionTo('messages');
        }
    }

});