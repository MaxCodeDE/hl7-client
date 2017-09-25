import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hl7-file-item', 'Integration | Component | hl7 file item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hl7-file-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hl7-file-item}}
      template block text
    {{/hl7-file-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
