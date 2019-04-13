import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | postPage', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:post-page');
    assert.ok(route);
  });
});
