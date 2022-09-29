//2022.09.27.

// 49. Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
/* Example
    strs                                    output
    ["eat","tea","tan","ate","nat","bat"]   [["bat"],["nat","tan"],["ate","eat","tea"]]
    [""]                                    [[""]]
    ["a"]                                   [["a"]]
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/* Time Limit Exceeded
var groupAnagrams = function (strs) {
  let answer = [];
  while (strs.length > 0) {
    let temp = [strs[0]];
    strs.splice(0, 1);
    const tmp = temp[0].split("");
    for (let i = 0; i < strs.length; i++)
      if (anagram(tmp, strs[i].split(""))) {
        temp.push(strs[i]);
        strs.splice(i, 1);
        i--;
      }
    answer.push(temp);
  }
  return answer;
};
function anagram(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  arr1.sort(), arr2.sort();
  for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false;
  return true;
}*/
/* strs 속 값의 길이를 기준으로 정렬했으나 여전히 시간초과
var groupAnagrams = function (strs) {
  let answer = [];
  strs.sort((a, b) => a.length - b.length);
  while (strs.length > 0) {
    let temp = [strs[0]];
    strs.splice(0, 1);
    const tmp = temp[0].split("");
    for (let i = 0; i < strs.length; i++) {
      if (tmp.length !== strs[i].length) break;
      if (anagram(tmp, strs[i].split(""))) {
        temp.push(strs[i]);
        strs.splice(i, 1);
        i--;
      }
    }
    answer.push(temp);
  }
  return answer;
};
function anagram(arr1, arr2) {
  arr1.sort(), arr2.sort();
  for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false;
  return true;
}*/
var groupAnagrams = function (strs) {
  let obj = {};
  for (let str of strs) {
    const key = str.split("").sort().join("");
    if (obj[key]) obj[key].push(str);
    else obj[key] = [str];
  }
  let answer = [];
  for (let i in obj) answer.push(obj[i]);
  return answer;
};
