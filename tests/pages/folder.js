import {
  create,
  visitable,
  collection,
  clickable,
  hasClass
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/inbox'),
  emails: collection({
  	itemScope: 'table tr',
  	item: {
  		star: clickable('td', { at: 1 }), // star is in 2nd table cell
  		starred: hasClass('inbox-started', 'i', { scope: 'td:eq(1)' }) // i in td[1] has class inbox-started
  	}
  })
});
