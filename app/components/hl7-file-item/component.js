import Ember from 'ember';
const fs = requireNode('fs');

export default Ember.Component.extend({
    
    hl7Server: Ember.inject.service(),
    
    actions: {
        setEditing(value) {
            this.set('isEditigData', value);
            if (!value) {
                fs.writeFile(this.get('file.filename'), this.get('file.fileData'), function(err) {
                if(err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            }); 
            }
        }
    }
    
});
