var prelude = require('./src/prelude'),
	environment = require('./src/environment'),
	combinators = require('./node_modules/fantasy-combinators/combinators'),
	fantasy = environment();

fantasy = fantasy
	.property('apply', combinators.apply)
	.property('compose', combinators.compose)
	.property('constant', combinators.constant)
	.property('fix', combinators.fix)
	.property('flip', combinators.flip)
	.property('identity', combinators.identity)
	.property('substitution', combinators.substitution)
	.property('thrush', combinators.thrush);

exports = module.exports = fantasy;
