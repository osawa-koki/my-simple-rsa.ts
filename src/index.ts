import yargs from 'yargs';
import getPublicKey from '../util/fn.getPublicKey';
import getPrivateKey from '../util/fn.getPrivateKey';
import encrypt from '../util/fn.encrypt';
import decrypt from '../util/fn.decrypt';
import isPrime from '../util/fn.isPrime';

const argv = yargs(process.argv)
  .options({
    prime1: { type: 'number', demandOption: true },
    prime2: { type: 'number', demandOption: true },
    message: { type: 'string', demandOption: true },
  })
  .help().argv;

Promise.resolve(argv).then(({ prime1, prime2, message }) => {
  if (isPrime(prime1) === false) {
    throw new Error('prime1 is not a prime number.');
  }
  if (isPrime(prime2) === false) {
    throw new Error('prime2 is not a prime number.');
  }

  // 公開鍵・秘密鍵を生成する
  const publicKey = getPublicKey(prime1, prime2);
  console.log(`公開鍵: ${publicKey}`);
  const privateKey = getPrivateKey(prime1, prime2, publicKey);
  console.log(`秘密鍵: ${privateKey}`);

  const encrypted = encrypt(publicKey, message);

  // 暗号化されたデータを復号する
  const decrypted = decrypt(privateKey, encrypted);

  console.log(`元のメッセージ: ${message}`);
  console.log(`暗号化されたメッセージ: ${encrypted}`);
  console.log(`復号化されたメッセージ: ${decrypted}`);
});
