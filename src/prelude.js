//
//  ## functionName(f)
//
//  Returns the name of function `f`.
//
function functionName(f) {
    return f._name || f.name;
}

//
//  ## functionLength(f)
//
//  Returns the arity of function `f`.
//
function functionLength(f) {
    return f._length || f.length;
}

//
//  ## bind(f)(o)
//
//  Makes `this` inside of `f` equal to `o`:
//
//       fantasy.bind(function() { return this; })(a)() == a
//
//  Also partially applies arguments:
//
//       fantasy.bind(fantasy.add)(null, 10)(32) == 42
//
function bind(f) {
    function curriedBind(o) {
        /* If native bind doesn't exist, use a polyfill. */
        var args = [].slice.call(arguments, 1),
            g;

        if(f.bind) g = f.bind.apply(f, [o].concat(args));
        else {
            g = function() {
                return f.apply(o, args.concat(rest(arguments)));
            };
        }

        /*
           Let's try and associate all curried functions with the same name as the originator.
           Can't override length but can set _length for currying
        */
        g._name = functionName(f);
        g._length = Math.max(functionLength(f) - args.length, 0);

        return g;
    }

    /* Manual currying since `curry` relies in bind. */
    if(arguments.length > 1) return curriedBind.apply(this, [].slice.call(arguments, 1));
    else return curriedBind;
}

//
//  ## curry(f)
//
//  Takes a normal function `f` and allows partial application of its
//  named arguments:
//
//       var add = fantasy.curry(function(a, b) {
//              return a + b;
//          }),
//          add15 = add(15);
//
//       add15(27) == 42;
//
//  Retains ability of complete application by calling the function
//  when enough arguments are filled:
//
//       add(15, 27) == 42;
//
function curry(f) {
    var a = function() {
        var g = bind(f).apply(f, [this].concat([].slice.call(arguments)));

        if(!functionLength(g)) return g();
        else return curry(g);
    };

    /*
       Let's try and associate all curried functions with the same name as the originator.
       Can't override length but can set _length for currying
    */
    a._name = functionName(f);
    a._length = functionLength(f);

    return a;
}

//
//  ## create(proto)
//
//  Partial polyfill for Object.create - creates a new instance of the
//  given prototype.
//
function create(proto) {
    function Ctor() {}
    Ctor.prototype = proto;
    return new Ctor();
}

//
//  ## getInstance(self, constructor)
//
//  Always returns an instance of constructor.
//
//  Returns self if it is an instanceof constructor, otherwise
//  constructs an object with the correct prototype.
//
function getInstance(self, constructor) {
    return self instanceof constructor ? self : create(constructor.prototype);
}

//
//  ## singleton(k, v)
//
//  Creates a new single object using `k` as the key and `v` as the
//  value. Useful for creating arbitrary keyed objects without
//  mutation:
//
//       fantasy.singleton(['Hello', 'world'].join(' '), 42) == {'Hello world': 42}
//
function singleton(k, v) {
    var o = {};
    o[k] = v;
    return o;
}

//
//  ## extend(a, b)
//
//  Right-biased key-value concat of objects `a` and `b`:
//
//       fantasy.extend({a: 1, b: 2}, {b: true, c: false}) == {a: 1, b: true, c: false}
//
function extend(a, b) {
    var rec = function(a, b) {
        var i;
        for(i in b) {
            a[i] = b[i];
        }
        return a;
    };
    return rec(rec({}, a), b);
}

//
//  ## arrayOf(type)
//
//  Sentinel value for when an array of a particular type is needed:
//
//       arrayOf(Number)
//
function arrayOf(type) {
    var self = getInstance(this, arrayOf);
    self.type = type;
    return self;
}

//
//  ## objectLike(props)
//
//  Sentinel value for when an object with specified properties is
//  needed:
//
//       objectLike({
//           age: Number,
//           name: String
//       })
//
function objectLike(props) {
    var self = getInstance(this, objectLike);
    self.props = props;
    return self;
}

//
//  ## isTypeOf(a)(b)
//
//  Returns `true` if `b` has `typeof a`.
//
var isTypeOf = curry(function(a, b) {
    return typeof b === a;
});

//
//  ## isBoolean(a)
//
//  Returns `true` if `a` is a `Boolean`.
//
var isBoolean = isTypeOf('boolean');

//
//  ## isFunction(a)
//
//  Returns `true` if `a` is a `Function`.
//
var isFunction = isTypeOf('function');

//
//  ## isNumber(a)
//
//  Returns `true` if `a` is a `Number`.
//
var isNumber = isTypeOf('number');

//
//  ## isObject(a)
//
//  Returns `true` if `a` is a `Object`.
//
var isObject = isTypeOf('object');

//
//  ## isString(a)
//
//  Returns `true` if `a` is a `String`.
//
var isString = isTypeOf('string');

//
//  ## isArray(a)
//
//  Returns `true` if `a` is an `Array`.
//
function isArray(a) {
    if(Array.isArray) return Array.isArray(a);
    else return Object.prototype.toString.call(a) === "[object Array]";
}

//
//  ## isInstanceOf(a)(b)
//
//  Returns `true` if `a` is an instance of `b`.
//
var isInstanceOf = curry(function(a, b) {
    return b instanceof a;
});

//
//  ## isArrayOf(a)
//
//  Returns `true` if `a` is an instance of `arrayOf`.
//
var isArrayOf = isInstanceOf(arrayOf);

//
//  ## isObjectLike(a)
//
//  Returns `true` if `a` is an instance of `objectLike`.
//
var isObjectLike = isInstanceOf(objectLike);

exports = module.exports = {
    create: create,
    getInstance: getInstance,
    extend: extend,
    singleton: singleton,
    arrayOf: arrayOf,
    objectLike: objectLike,
    isTypeOf: isTypeOf,
    isBoolean: isBoolean,
    isFunction: isFunction,
    isNumber: isNumber,
    isObject: isObject,
    isString: isString,
    isArray: isArray,
    isInstanceOf: isInstanceOf,
    isArrayOf: isArrayOf,
    isObjectLike: isObjectLike
};
