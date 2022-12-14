module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,html,png,txt,js,css}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	// runTimeCaching: [
	// 	urlPattern: /https:\/\/jsonplaceholder\.typicode\.com/,
	// 	handler: ""
	// ]
};