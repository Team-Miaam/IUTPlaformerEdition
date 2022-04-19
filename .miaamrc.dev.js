module.exports = {
	mode: 'development',
	paths: {
		assets: './assets',
		src: './src',
		dist: './dist/',
		build: './build',
	},
	index: './src/index.mjs',
	server: {
		port: 3007,
	},
	watchOptions: {
		ignored: ['/node_modules/'],
	},
};
