//2022.10.03.

// 139. Word Break
// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.
/* Example
    s                   wordDict            output
    "leetcode"          ["leet","code"]     true
    "applepenapple"     ["apple","pen"]     true
    "catsandog"         ["cats","dog",      false
                        "sand","and","cat"]
*/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// 재귀함수 쓰는 DP가 아닌 방법... 이것도 이해가 어렵다
var wordBreak = function (s, wordDict) {
  const table = Array(s.length + 1).fill(false);
  table[0] = true;
  for (let i = 0; i < table.length; i++) {
    if (!table[i]) continue;
    for (let w of wordDict)
      if (s.slice(i, i + w.length) === w)
        if (i + w.length <= table.length) table[i + w.length] = true;
  }
  return table[s.length];
};
