import Ember from 'ember';
const fs = requireNode('fs');
const path = requireNode('path');
const hl7 = requireNode('simple-hl7');

export default Ember.Route.extend({

    hl7Server: Ember.inject.service(),

    model() {
        this.store.unloadAll('hl7-file');
        var messagePath = this.get('hl7Server.messagesPath');
        var files = fs.readdirSync(messagePath);
        files.forEach((item, index, array) => {
            var filename = path.join(messagePath, files[index]);
            var data = fs.readFileSync(filename, "utf8");
            this.store.createRecord('hl7-file', {
                filename: filename,
                path: messagePath,
                fileData: data.replace(/(?:\r\n|\r|\n)/g, '<br />')
            });
        });
        return this.store.peekAll('hl7-file');
    },

    actions: {
        sendMessage(file) {
                var parser = new hl7.Parser({
                    segmentSeperator: '\n'
                });

                var msg = parser.parseFileSync(file.get('filename'));

                var client = hl7.Server.createTcpClient(this.get('hl7Server.serverIp'), this.get('hl7Server.serverPort'));

                client.send(msg, function (err, ack) {
                    console.log(ack.log());
                });
            },
            deleteFile(file) {
                fs.unlink(file.get('filename'), (error) => {
                    if (error) {
                        throw error;
                    }
                    file.deleteRecord();
                    this.transitionTo('messages');
                });
            }
    }

});