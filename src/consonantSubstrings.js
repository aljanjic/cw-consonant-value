function consonantSubstrings(string) {

  // Create an array of alphabet letters and vowels
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const vowels = ["a", "e", "i", "o", "u"]

  // Divide the string into the substrings 

  // Division can be done using split() or replaceAll():
  // https://www.spguides.com/split-a-string-with-multiple-separators-in-typescript/
  let str = 'Can-a/d/a';
  const result= str.split(/[-/_]+/);
  console.log('web example: ', result);

  let str2 = 'strength';
  const result2= str2.split(/[a/e/i/o/u]+/);
  console.log('Test result: ', result2);

  // Explore other possibilities using chat


  // Calculate the sum of the substring


  return 26;
}

module.exports = consonantSubstrings;
