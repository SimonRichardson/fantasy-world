var λ = require('./../fantasy-world');

var env0 = λ.environment()
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

var env1 = λ.environment()
	.method(
		'concat',
		function(a) {
			if (Array.isArray) return Array.isArray(a);
			else return Object.prototype.toString.call(a) === '[object Array]';
		},
		function(a, b) {
			return a.concat(b);
		}
	);

var env = env0.envAppend(env1);

console.log(env.negate(100)); // Outputs -100
console.log(env.concat([1, 2], ['a', 'b'])); // Outputs [1, 2, 'a', 'b']
