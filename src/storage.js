var Config = require('./config');

require('./helpers/hash-code');

class Storage {
	constructor() {
		console.log('test'.hashCode());
	}

	_getHash(opts) {
		return JSON.stringify(opts).hashCode();
	}

    has(opts) {
        console.log(localStorage.getItem(this._getHash(opts)));
    }
}

module.exports = Storage;
