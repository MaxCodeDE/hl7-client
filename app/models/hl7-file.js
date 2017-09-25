import DS from 'ember-data';

export default DS.Model.extend({

    path: DS.attr('String'),
    filename: DS.attr('String'),
    fileData: DS.attr('String')
    
    
});
