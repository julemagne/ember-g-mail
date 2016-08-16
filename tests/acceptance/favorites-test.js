import { test } from 'qunit';
import moduleForAcceptance from 'mail2/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | favorites');

test('visiting /favorites', function(assert) {
  visit('/inbox');

  click('td i.fa-star');

  andThen(function() {
    assert.ok($('td i.fa-star').hasClass('inbox-started'));
  });
});
