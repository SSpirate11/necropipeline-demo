// INTENTIONAL SYNTAX ERROR: Missing closing bracket

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === reverse(cleaned);
}

// MISSING CLOSING BRACKET - This will cause syntax error
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  // MISSING: }
  
  return count;
}

module.exports = {
  capitalize,
  reverse,
  isPalindrome,
  countVowels
};
