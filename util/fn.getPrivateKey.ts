import lcm from './fn.lcm';

/**
 * Computes the private key given two prime numbers and the public key.
 * @param p - The first prime number.
 * @param q - The second prime number.
 * @param publicKey - The public key [n, e].
 * @returns The private key [n, d].
 */
function getPrivateKey(
  p: number,
  q: number,
  publicKey: [number, number]
): [number, number] {
  const [n, e] = publicKey;
  const phi = lcm(p - 1, q - 1);
  let d = modInv(e, phi);
  // Ensure d is positive
  while (d < 0) {
    d += phi;
  }
  return [n, d];
}

/**
 * Returns the modular multiplicative inverse of a modulo m, if it exists.
 * @param a - The number to find the inverse of.
 * @param m - The modulus.
 * @returns The modular multiplicative inverse of a modulo m, if it exists.
 * @throws An error if the inverse does not exist.
 */
function modInv(a: number, m: number): number {
  const [gcdVal, x] = extEuclidean(a, m);
  if (gcdVal !== 1) {
    throw new Error(`The modular inverse of ${a} (mod ${m}) does not exist.`);
  }
  return ((x % m) + m) % m;
}

/**
 * Extended Euclidean algorithm. Returns [gcd(a, b), x, y] such that ax + by = gcd(a, b).
 * @param a - The first integer.
 * @param b - The second integer.
 * @returns An array [gcd(a, b), x, y] such that ax + by = gcd(a, b).
 */
function extEuclidean(a: number, b: number): [number, number, number] {
  let x = 0;
  let y = 1;
  let u = 1;
  let v = 0;

  while (a !== 0) {
    const q = Math.floor(b / a);
    const r = b % a;
    const m = x - u * q;
    const n = y - v * q;
    b = a;
    a = r;
    x = u;
    y = v;
    u = m;
    v = n;
  }

  return [b, x, y];
}

export default getPrivateKey;
