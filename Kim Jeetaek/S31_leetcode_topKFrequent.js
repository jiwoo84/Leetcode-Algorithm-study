//2022.10.11.

// 347. Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
/* Example
    nums            k       output
    [1,1,1,2,2,3]   2       [1,2]
    [1]             1       [1]
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  for (const num of nums) map.set(num, map.get(num) + 1 || 1);
  const arr = [...map.entries()].sort((a, b) => b[1] - a[1]);
  const answer = [];
  for (let i = 0; i < k; i++) answer.push(arr[i][0]);
  return answer;
};
// sort()를 쓰면 O(n log n), 아래는 O(n)
// 하지만 Runtime은 위가 더 작다
var topKFrequent = function (nums, k) {
  const map = new Map(),
    arr = [],
    answer = [];
  for (const num of nums) map.set(num, map.get(num) + 1 || 1);
  for (const [key, val] of map)
    if (arr[val]) arr[val].push(key);
    else arr[val] = [key];
  for (let i = nums.length; i >= 0; i--) {
    if (arr[i]) answer.push(...arr[i]);
    if (answer.length === k) return answer;
  }
};
