var prelude = require('./src/prelude'),
	environment = require('./src/environment'),
	daggy = require('./node_modules/daggy/daggy'),
	combinators = require('./node_modules/fantasy-combinators/combinators'),
	identities = require('./node_modules/fantasy-identities/identity'),
	promises = require('./node_modules/fantasy-promises/index'),
	validations = require('./node_modules/fantasy-validations/validation'),
	states = require('./node_modules/fantasy-states/state'),
	fantasy = environment();

fantasy = fantasy
	//
	//  ## Daggy
	//  [https://github.com/puffnfresh/daggy](daggy)
	//  
	.property('tagged', daggy.tagged)
	.property('taggedSum', daggy.taggedSum)

	//
	//  ## Fantasy-Land Combinators
	//  [https://github.com/puffnfresh/fantasy-combinators](fantasy-combinators)
	//  
	.property('apply', combinators.apply)
	.property('compose', combinators.compose)
	.property('constant', combinators.constant)
	.property('fix', combinators.fix)
	.property('flip', combinators.flip)
	.property('identity', combinators.identity)
	.property('substitution', combinators.substitution)
	.property('thrush', combinators.thrush)

	//
	//  ## Fantasy-Land Identities
	//  [https://github.com/puffnfresh/fantasy-identities](fantasy-identities)
	//
	.property('Identity', identities)

	//
	//  ## Fantasy-Land Promises
	//  [https://github.com/puffnfresh/fantasy-promises](fantasy-promises)
	//
	.property('Promise', promises)

	//
	//  ## Fantasy-Land Validations
	//  [https://github.com/puffnfresh/fantasy-validations](fantasy-validations)
	//
	.property('Validation', validations)

	//
	//  ## Fantasy-Land States
	//  [https://github.com/puffnfresh/fantasy-states](fantasy-states)
	//
	.property('State', states);

exports = module.exports = fantasy;
