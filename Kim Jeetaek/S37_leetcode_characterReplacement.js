//2022.10.26.

// 424. Longest Repeating Character Replacement
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter you can get after performing the above operations.
/* Example
    s           k       output
    "ABAB"      2       4
    "AABABBA"   1       4
*/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

/* Time Limit Exceeded at 21. case (length:10000)
var characterReplacement = function (s, k, l = s.length) {
  for (let i = 0; i + l <= s.length; i++) {
    const sub = s.slice(i, l + i);
    const chars = new Map(); // {알파벳 : 그 개수}
    for (const c of sub) chars.set(c, (chars.get(c) || 0) + 1);
    const most = Math.max(...chars.values());
    if (l - most <= k) return l;
  }
  return characterReplacement(s, k, l - 1);
};*/

// Discuss 참고 - sliding window
var characterReplacement = function (s, k) {
  let answer = 0;
  const chars = new Map();
  let most = 0,
    left = 0;
  for (let right = 0; right < s.length; right++) {
    chars.set(s[right], (chars.get(s[right]) || 0) + 1);
    if (most < chars.get(s[right])) most = chars.get(s[right]);
    const length = right - left + 1;
    if (length - most > k) {
      chars.set(s[left], chars.get(s[left]) - 1);
      left++;
    } else if (answer < length) answer = length;
  }
  return answer;
};
