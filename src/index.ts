import isPrime from '../util/fn.isPrime';
import getPublicKey from '../util/fn.getPublicKey';
import getPrivateKey from '../util/fn.getPrivateKey';
import encrypt from '../util/fn.encrypt';
import decrypt from '../util/fn.decrypt';

const prime1 = 61;
const prime2 = 53;
const message = 'Hello, world!';

// 公開鍵・秘密鍵を生成する
const publicKey = getPublicKey(prime1, prime2);
const privateKey = getPrivateKey(prime1, prime2, publicKey);

const encrypted = encrypt(privateKey, message);

// 暗号化されたデータを復号する
const decrypted = decrypt(publicKey, encrypted);

console.log(`元のメッセージ: ${message}`);
console.log(`暗号化されたメッセージ: ${encrypted}`);
console.log(`復号化されたメッセージ: ${decrypted}`);
