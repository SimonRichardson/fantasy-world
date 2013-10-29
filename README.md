# Fantasy World

![](https://raw.github.com/puffnfresh/fantasy-land/master/logo.png)

## General

Collection of the [Fantasy-Land](https://github.com/puffnfresh/fantasy-land) implementations.

## Fantasy-Land:

* [daggy](https://github.com/puffnfresh/daggy)
* [Fantasy-Combinators](https://github.com/puffnfresh/fantasy-combinators)
* [Fantasy-Identities](https://github.com/puffnfresh/fantasy-identities)
* [Fantasy-Promises](https://github.com/puffnfresh/fantasy-promises)
* [Fantasy-Validations](https://github.com/puffnfresh/fantasy-validations)
* [Fantasy-States](https://github.com/puffnfresh/fantasy-states)
* [Fantasy-Options](https://github.com/puffnfresh/fantasy-options)
* [Fantasy-Eithers](https://github.com/puffnfresh/fantasy-eithers)
* [Fantasy-IO](https://github.com/puffnfresh/fantasy-io)
* [Fantasy-Tuples](https://github.com/puffnfresh/fantasy-tuples)
* [Fantasy-Cofrees](https://github.com/puffnfresh/fantasy-cofrees)
* [Fantasy-Readers](https://github.com/puffnfresh/fantasy-readers)
* [Fantasy-Stores](https://github.com/puffnfresh/fantasy-stores)
* [Fantasy-Lenses](https://github.com/puffnfresh/fantasy-lenses)

## Prelude

Fantasy World also includes a collection of functions that make it 
easier to develop in Fantasy Land.

(More information to come)

## Environment

An environment holds methods and properties.

Methods are implemented as multi-methods, which allow a form of
*ad-hoc polymorphism*. Duck typing is another example of ad-hoc
polymorphism, but only allows a single implementation at a time, via
prototype mutation.

A method instance is a product of a name, a predicate and an
implementation:

   var env = fantasy.environment()
       .method(
           // Name
           'negate',
           // Predicate
           function(n) {
               return typeof n == 'number';
           },
           // Implementation
           function(n) {
               return -n;
           }
       );

   env.negate(100) == -100;

We can now override the environment with Some more implementations:

   var env2 = env
       .method(
           'negate',
           function(b) {
               return typeof b == 'boolean';
           },
           function(b) {
               return !b;
           }
       );

   env2.negate(100) == -100;
   env2.negate(true) == false;

Environments are immutable; references to `env` won't see an
implementation for boolean. The `env2` environment could have
overwritten the implementation for number and code relying on `env`
would still work.

Properties can be accessed without dispatching on arguments. They
can almost be thought of as methods with predicates that always
return true:

   var env = fantasy.environment()
       .property('name', 'Squishy');

   env.name === 'Squishy';
