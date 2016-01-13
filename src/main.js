let instance = null;

let _ = require('lodash');
let request = require('superagent');

let Validator = require('./helpers/validator');
let Config = require('./config');
let Storage = require('./storage');

class CSE {
	constructor(options) {	
		this.validator = new Validator();
		this.storage = new Storage();

		if(!instance) instance = this;
		let defaults = {
			key: null,
			engineId: null,
			version: 1
		};

		let mergedOpts = _.merge(defaults, options);

		if(this.validator.requiredValues(mergedOpts, 'options')) this.options = mergedOpts;

		return instance;
	}

	_query(options) {
		if(this.storage.has(options)) {
			return this.storage.get(options);
		} else {

		}
	}

	search(options) {
		let opts = {term: null};
		if(_.isString(options)) {
			opts.term = options;
		} else {
			opts = _.merge(opts, options);
		}

		if(this.validator.requiredValues(opts, 'search')) this._query(opts);
	}
}

new CSE({
	key: 'AIzaSyAERTfGy-SU5NVWAnOyhkEVAnOUj4QsXmo',
	engineId: '007652507006894166944:amufbs-b300'
}).search('test');

module.exports = CSE;