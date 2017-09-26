import Ember from 'ember';
const hl7 = requireNode('simple-hl7');

export default Ember.Route.extend({
    
    hl7Server: Ember.inject.service(),

    model() {
        //this.store.createRecord('hl7-log', {message: 'TEST', ack: 'ack', file: 'C:\\hl7-messages\\hl7-example1.hl7'});
        //this.store.createRecord('hl7-log', {message: 'TEST2', ack: 'ack', file: 'C:\\hl7-messages\\hl7-example1.hl7'});
        return this.store.peekAll('hl7-log');
    },


    actions: {
        resend(log) {
            var parser = new hl7.Parser({
                segmentSeperator: '\n'
            });

            var msg = parser.parseFileSync(log.get('file'));

            var client = hl7.Server.createTcpClient(this.get('hl7Server.serverIp'), this.get('hl7Server.serverPort'));

            client.send(msg, (err, ack) => {
                if (err) {
                    Materialize.toast('Error!', 4000);
                } else {
                    Materialize.toast('Messages succses!', 4000);
                }
                console.log(ack.log());
                // create temp log file
                this.store.createRecord('hl7-log', {
                    message: msg,
                    ack: ack.log(),
                    file: log.get('filename')
                });
            });
        },
        deleteLog(log) {
            log.deleteRecord();
        }
    }

});