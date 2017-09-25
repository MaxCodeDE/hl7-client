import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hl7-server-view', 'Integration | Component | hl7 server view', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hl7-server-view}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hl7-server-view}}
      template block text
    {{/hl7-server-view}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
