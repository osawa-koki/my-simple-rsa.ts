import modExp from './fn.modExp';

/**
 * 秘密鍵を用いて暗号化されたデータを復号します。
 * @param encrypted - 暗号化されたデータ。
 * @param privateKey - 復号に使用する秘密鍵。
 * @returns 復号されたデータ。
 */
function decrypt(encrypted: number[], privateKey: [number, number]): string {
  const [n, d] = privateKey;
  const decryptedChars = encrypted.map((c) => modExp(c, d, n));
  return decryptedChars.map((c) => String.fromCharCode(c)).join('');
}

export default decrypt;
