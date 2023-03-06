function stringToAscii(str: string) {
  const base64 = btoa(str);
  const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
  let ascii = '';
  for (let i = 0; i < bytes.length; i++) {
    ascii += String.fromCharCode(bytes[i]);
  }
  return ascii;
}

export default stringToAscii;
