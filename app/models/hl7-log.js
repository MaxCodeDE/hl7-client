import DS from 'ember-data';

export default DS.Model.extend({

    message: DS.attr('String'),
    ack: DS.attr('String'),
    file: DS.attr('String')
    
    
});
