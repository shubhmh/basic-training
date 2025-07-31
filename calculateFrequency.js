function calculateFrequency(string) {
  const freq = new Array(26).fill(0); // 'a' to 'z'

  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) { // check for 'a' to 'z'
      freq[charCode - 97]++;
    }
  }

  const result = {};
  for (let i = 0; i < 26; i++) {
    if (freq[i] > 0) {
      result[String.fromCharCode(i + 97)] = freq[i];
    }
  }

  return result;
}
