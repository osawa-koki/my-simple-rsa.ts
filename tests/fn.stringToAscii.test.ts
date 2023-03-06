import stringToAscii from '../util/fn.stringToAscii';

describe('stringToASCII', () => {
  it('should convert a BASE64-encoded string to ASCII', () => {
    const input = 'SGVsbG8sIHdvcmxkIQ==';
    const expected = 'Hello, world!';
    expect(stringToAscii(input)).toEqual(expected);
  });
});
