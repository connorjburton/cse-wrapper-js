class Validator {
	constructor() {
		this.required = {
			options: ['key', 'engineId'],
			search: ['term']
		}
	}

    requiredValues(opts, type) {
        let passed = true;

        _.each(_.keys(_.pickBy(opts, _.isNull)), _.bind(function(o) { if(_.indexOf(this.required[type], o) !== -1) { passed = false; console.warn('[CSE Wrapper JS] ' + o + ' is missing'); }}, this));

        return passed;
    }
}

module.exports = Validator;
