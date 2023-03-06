import modExp from './fn.modExp';

/**
 * 秘密鍵を用いて暗号化されたデータを復号します。
 * @param privateKey - 復号に使用する秘密鍵。
 * @param encrypted - 暗号化されたデータ。
 * @returns 復号されたデータ。
 */
function decrypt(privateKey: [number, number], encrypted: string): string {
  const [n, d] = privateKey;
  const encryptedBlocks = encrypted.match(/.{1,3}/g) || [];
  const encryptedChars = encryptedBlocks.map((block) => parseInt(block, 10));
  const decryptedChars = encryptedChars.map((c) => modExp(c, d, n));
  const decryptedString = String.fromCharCode(...decryptedChars);
  return decryptedString;
}


export default decrypt;
