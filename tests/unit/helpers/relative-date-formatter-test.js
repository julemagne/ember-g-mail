import { relativeDateFormatter } from 'mail2/helpers/relative-date-formatter';
import { module, test } from 'qunit';
import moment from 'moment';

module('Unit | Helper | relative date formatter');

const date = moment('07/27/2016 1:00:00 PM', 'MM/DD/YYYY h:mm:ss A').toDate();

test('shows relative time for dates that are less than 24 hours old', function(assert) {
  const laterDate = moment(date).add(1, 'hour').toDate();
  timekeeper.freeze(laterDate);
  const actual = relativeDateFormatter([date], { relative: true });
  assert.ok(actual, '1:00 PM (1 hour ago)');
});

test('defaults relative to true', function(assert) {
  const laterDate = moment(date).add(1, 'hour').toDate();
  timekeeper.freeze(laterDate);
  const actual = relativeDateFormatter([date]);
  assert.ok(actual, '1:00 PM (1 hour ago)', 'relative time was not set correctly.');
});

test('shows 1 day ago', function(assert) {
	const laterDate = moment(date).add(1, 'day').toDate();
	timekeeper.freeze(laterDate);
	const actual = relativeDateFormatter([date], { relative: true });
	assert.equal(actual, 'Jul 27 (1 day ago)');	
});

// test('shows formatted date for dates that are older than 24 hours old', function(assert) {
//   assert.ok(true);
// });

test('shows just date when relative is false', function(assert) {
	const laterDate = moment(date).add(2, 'day').toDate();
	timekeeper.freeze(laterDate);
	const actual = relativeDateFormatter([date], { relative: false });
	assert.equal(actual, 'Jul 27');	
});