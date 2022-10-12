//2022.09.27.

// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.
/* Example
    s           output
    "abcabcbb"  3
    "bbbbb"     1
    "pwwkew"    3
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let answer = 0,
    start = 0;
  while (start < s.length) {
    let temp = [];
    for (let i = start; i < s.length; i++)
      if (temp.includes(s[i])) break;
      else temp.push(s[i]);
    if (temp.length > answer) answer = temp.length;
    start++;
  }
  return answer;
};
