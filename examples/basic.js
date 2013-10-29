var λ = require('./../fantasy-world');

λ = λ.environment()
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

console.log(λ.negate(100) == -100);
