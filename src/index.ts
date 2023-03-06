import isPrime from '../util/fn.isPrime';
import getPublicKey from '../util/fn.getPublicKey';
import getPrivateKey from '../util/fn.getPrivateKey';

const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: ts-node index.ts [prime1] [prime2]');
  process.exit(1);
}

const p = Number(args[0]);
const q = Number(args[1]);
if (!isPrime(p) || !isPrime(q)) {
  console.log('Both arguments must be prime numbers');
  process.exit(1);
}

const publicKey = getPublicKey(p, q);
const privateKey = getPrivateKey(p, q, publicKey);

console.log(`Public key: [${publicKey[0]}, ${publicKey[1]}]`);
console.log(`Private key: [${privateKey[0]}, ${privateKey[1]}]`);
