import test from 'ava';
import getStream from 'get-stream';
import m from './';

const opts = {
	query: {
		entity: 'musicArtist',
		limit: 1
	}
};

test('default', async t => {
	const result = await m('deftones', opts);

	t.is(result.body.resultCount, 1);
	t.is(result.body.results[0].artistName.toLowerCase(), 'deftones');
});

test('stream', async t => {
	t.is(JSON.parse(await getStream(m.stream('deftones', opts))).results[0].artistName.toLowerCase(), 'deftones');
});
