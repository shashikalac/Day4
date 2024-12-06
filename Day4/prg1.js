function isPrime(num) {
    if (num < 2) return false; // Numbers less than 2 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getFirstNPrimes(n) {
    const primes = [];
    let num = 2; // Start checking from 2, the first prime number
    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}

function printSquaresOfPrimes(n) {
    const primes = getFirstNPrimes(n);
    primes.forEach(prime => {
        console.log(`Square of ${prime}: ${prime * prime}`);
    });
    
  
}

// Print the square of the first 10 prime numbers
printSquaresOfPrimes(10);