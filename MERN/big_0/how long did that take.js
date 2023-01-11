// Number.prototype.isPrime = function() {
//     for( let i=2; i<this; i++ ) {
//         if( this % i === 0 ) {
//             return false;
//         }
//     }
//     return true;
// }


// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while( primeCount < 1e4 ) {
//     if( num.isPrime() ) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 10,000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// const findPrime = num => {
//     let i, primes = [2, 3], n = 5;
//     const isPrime = n => {
//        let i = 1, p = primes[i],
//        limit = Math.ceil(Math.sqrt(n));
//        while (p <= limit) {
//           if (n % p === 0) {
//              return false;
//           }
//           i += 1;
//           p = primes[i];
//        }
//        return true;
//     }
//     for (i = 2; i <= num; i += 1) {
//        while (!isPrime(n)) {
//           n += 2;
//        }
//        primes.push(n);
//        n += 2;
//     };
//     return primes[num - 1];
//  }
//  console.log(findPrime(10000))

// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
rFib(20);
// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20);

// console.log(rFib(20))
// console.log(iFib(20))

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString(story))