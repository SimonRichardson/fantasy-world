var daggy = require('daggy'),
	helpers = require('fantasy-helpers'),
	environment = require('fantasy-environment'),
	combinators = require('fantasy-combinators'),
	identities = require('fantasy-identities'),
	promises = require('fantasy-promises'),
	validations = require('fantasy-validations'),
	states = require('fantasy-states'),
	options = require('fantasy-options'),
	eithers = require('fantasy-eithers'),
	io = require('fantasy-io'),
	tuples = require('fantasy-tuples'),
	cofrees = require('fantasy-cofrees'),
	readers = require('fantasy-readers'),
	stores = require('fantasy-stores'),
	lenses = require('fantasy-lenses'),
	fantasy = environment();

fantasy = fantasy.envConcat({}, helpers)
	
	//
	//  ## Environment
	//  
	.property('environment', environment)

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
	.property('State', states)

	//
	//  ## Fantasy-Land Options
	//  [https://github.com/puffnfresh/fantasy-options](fantasy-options)
	//
	.property('Option', options)

	//
	//  ## Fantasy-Land Eithers
	//  [https://github.com/puffnfresh/fantasy-eithers](fantasy-eithers)
	//
	.property('Either', eithers)

	//
	//  ## Fantasy-Land IO
	//  [https://github.com/puffnfresh/fantasy-io](fantasy-io)
	//
	.property('IO', io)

	//
	//  ## Fantasy-Land Tuples
	//  [https://github.com/puffnfresh/fantasy-tuples](fantasy-tuples)
	//
	.property('Tuple2', tuples.Tuple2)
	.property('Tuple3', tuples.Tuple3)
	.property('Tuple4', tuples.Tuple4)
	.property('Tuple5', tuples.Tuple5)

	//
	//  ## Fantasy-Land Cofrees
	//  [https://github.com/puffnfresh/fantasy-cofrees](fantasy-cofrees)
	//
	.property('Cofree', cofrees)

	//
	//  ## Fantasy-Land Readers
	//  [https://github.com/puffnfresh/fantasy-readers](fantasy-readers)
	//
	.property('Reader', readers)

	//
	//  ## Fantasy-Land Stores
	//  [https://github.com/puffnfresh/fantasy-stores](fantasy-stores)
	//
	.property('Store', stores)

	//
	//  ## Fantasy-Land Lenses
	//  [https://github.com/puffnfresh/fantasy-lenses](fantasy-lenses)
	//
	.property('Lens', lenses.Lens)
	.property('PartialLens', lenses.PartialLens);
	
exports = module.exports = fantasy;
