module.exports = function safetify(config) {
	if (typeof config !== 'object') {
		throw new TypeError('Expect an object but got ' + typeof config)
	}
  return Object.assign({}, config, {
    resolve: {
      extenstions: ['', '.js']
    },
    resolveLoader: {
      modulesDirectories: []
    },
    module: {
			loaders: []
    },
		plugins: []
  })
}
