import modExp from './fn.modExp';

/**
 * RSA暗号に基づき、指定された秘密鍵でデータを暗号化します。
 * @param privateKey - 秘密鍵[n, d]。
 * @param message - 暗号化するデータ。
 * @returns 暗号化されたデータ。
 */
function encrypt(privateKey: [number, number], message: string): string {
  const [n, d] = privateKey;
  const blockSize = Math.floor(Math.log10(n) / Math.log10(2)) - 1;
  const blocks = message.split('').reduce((acc: string[], char: string) => {
    const code = char.charCodeAt(0);
    const padded = code.toString().padStart(blockSize, '0');
    acc.push(padded);
    return acc;
  }, []);
  const encryptedBlocks = blocks.map((block) => {
    const num = parseInt(block, 10);
    return modExp(num, d, n).toString();
  });
  return encryptedBlocks.join('');
}

export default encrypt;
