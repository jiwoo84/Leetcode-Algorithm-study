//2022.09.30.

// 647. Palindromic Substrings
// Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.
// s consists of lowercase English letters.
/* Example
    s       output
    "abc"   3
    "aaa"   6
*/
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let answer = s.length,
    start = 0,
    end = 2;
  while (start < s.length - 1) {
    if (palindromic(s.slice(start, end))) answer++;
    end++;
    if (end > s.length) {
      start++;
      end = start + 2;
    }
  }
  return answer;
};
function palindromic(s) {
  let start = 0,
    end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) return false;
    start++, end--;
  }
  return true;
}
