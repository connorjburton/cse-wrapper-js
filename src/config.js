let Config = {
	path: _.template('https://www.googleapis.com/customsearch/v<%= version %>'),
	lsPrefix: 'csejs-'
}

module.exports = Config;