import { test } from 'qunit';
import moduleForAcceptance from 'mail2/tests/helpers/module-for-acceptance';

import folderPage from 'mail2/tests/pages/folder';

moduleForAcceptance('Acceptance | favorites');

// make collection of emails and verb star
test('User favorites email from inbox', function(assert) {
  folderPage.visit();
  folderPage.emails(0).star();

  andThen(function() {	  	
	  // starred predicate checks if emails[0] document hasClass
    assert.ok(folderPage.emails(0).starred, 'email was not favorited');
  });
});
