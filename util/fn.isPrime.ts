/**
 * Checks whether the given number is a prime number.
 * @param n - The number to check.
 * @returns `true` if the number is prime, `false` otherwise.
 */
function isPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

export default isPrime;
