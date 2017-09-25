import Ember from 'ember';
const fs = requireNode('fs');
const path = requireNode('path');
const hl7 = requireNode('simple-hl7');

export default Ember.Route.extend({

    hl7Server: Ember.inject.service(),

    model() {
        var hl7Files = [];
        var messagePath = this.get('hl7Server.messagesPath');
        var files = fs.readdirSync(messagePath);
        files.forEach((item, index, array) => {
            var filename = path.join(messagePath, files[index]);
            var data = fs.readFileSync(filename, "utf8");
            var file = this.store.createRecord('hl7-file', {
                filename: filename,
                path: messagePath,
                fileData: data.replace(/(?:\r\n|\r|\n)/g, '<br />')
            });
            hl7Files.push(file);
        });
        return hl7Files;
    },

    actions: {
        sendMessage(file) {
            var parser = new hl7.Parser({
                segmentSeperator: '\n'
            });

            var msg = parser.parseFileSync(file.get('filename'));

            console.log("Parser Nachricht:");
            console.log(msg);


            var client = hl7.Server.createTcpClient(this.get('hl7Server.serverIp'), this.get('hl7Server.serverPort'));

            console.log('Parser Nachricht senden...')
            client.send(msg, function(err, ack) {
                console.log('ack erhalten:');
                console.log(ack.log());
            });
        }
    }

});