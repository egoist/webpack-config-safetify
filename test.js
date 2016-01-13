import test from 'ava'
import safe from './'

test('works', t => {
	t.same(safe({}).resolveLoader.modulesDirectories, [])
})

test('throws', t => {
	t.throws(function () {
		safe('12')
	}, TypeError)
})
