var prelude = require('./src/prelude'),
	environment = require('./src/environment'),
	daggy = require('./node_modules/daggy/daggy'),
	combinators = require('./node_modules/fantasy-combinators/combinators'),
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
	.property('thrush', combinators.thrush);

exports = module.exports = fantasy;
