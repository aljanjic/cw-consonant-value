const consonantSubstrings = require('./consonantSubstrings');

describe('consonantSubstrings', () => {
  it('"zodiac" should return 26', () => {
    expect(consonantSubstrings("zodiac")).toBe(26);
  });
});
