import isPrime from '../util/fn.isPrime';
import getPublicKey from '../util/fn.getPublicKey';
import getPrivateKey from '../util/fn.getPrivateKey';
import encrypt from '../util/fn.encrypt';
import decrypt from '../util/fn.decrypt';

// Command-line arguments
const args = process.argv.slice(2);
const [prime1, prime2] = args.map(Number);

// Check if primes are valid
if (!isPrime(prime1) || !isPrime(prime2)) {
  console.error('Both arguments must be prime numbers.');
  process.exit(1);
}

// Calculate public and private keys
const publicKey = getPublicKey(prime1, prime2);
const privateKey = getPrivateKey(prime1, prime2, publicKey);

// Test encryption and decryption
const message = 'Hello, world!';
console.log('Original message:', message);
const encryptedMessage = encrypt(publicKey, message);
console.log('Encrypted message:', encryptedMessage);
const decryptedMessage = decrypt(encryptedMessage, privateKey);
console.log('Decrypted message:', decryptedMessage);
