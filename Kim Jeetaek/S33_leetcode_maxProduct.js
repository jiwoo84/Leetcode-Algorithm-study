//2022.10.17.

// 152. Maximum Product Subarray
// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.
// A subarray is a contiguous subsequence of the array.
/* Example
    nums            output
    [2,3,-2,4]      6
    [-2,0,-1]       0
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
/* 일일이 다 곱해서 비교해보는 방법 ...역시나 시간초과
var maxProduct = function (nums) {
  let answer = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++)
    answer = Math.max(answer, stupid(nums.slice(i), []));
  return answer;
};
function stupid(nums, result) {
  if (nums.length === 0) return Math.max(...result);
  result.push(nums.reduce((acc, val) => acc * val, 1));
  nums.pop();
  return stupid(nums, result);
}*/
// 0을 기준으로 배열을 나누고, 나눈 배열들의 첫 음수와 끝 음수의 위치들을 뽑아내고, 그 음수들을 기준으로 각 배열들의 최댓값들을 저장하고, 그 저장 값들 중에서 최댓값을 반환 ...효율성도 가독성도 버렸다
var maxProduct = function (nums) {
  if (nums.length === 1) return nums[0];
  const splitZero = [];
  let temp = [],
    minus = [],
    minusIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      splitZero.push(minus);
      splitZero.push(temp);
      temp = [];
      minus = [];
      minusIdx = i + 1;
    } else temp.push(nums[i]);
    if (nums[i] < 0 && minus.length < 2) minus.push(i - minusIdx);
    else if (nums[i] < 0) minus[minus.length - 1] = i - minusIdx;
  }
  splitZero.push(minus);
  splitZero.push(temp);
  const answer = splitZero.length === 2 ? [] : [0];
  for (let i = 0; i < splitZero.length - 1; i += 2) {
    if (splitZero[i + 1].length === 0) continue;
    if (splitZero[i].length === 0)
      answer.push(sum(splitZero[i + 1], 0, splitZero[i + 1].length));
    else if (splitZero[i].length === 1)
      answer.push(
        Math.max(
          sum(splitZero[i + 1], 0, splitZero[i][0]),
          sum(splitZero[i + 1], splitZero[i][0] + 1, splitZero[i + 1].length)
        )
      );
    else {
      answer.push(
        Math.max(
          sum(splitZero[i + 1], 0, splitZero[i][0]),
          sum(splitZero[i + 1], 0, splitZero[i][1]),
          sum(splitZero[i + 1], 0, splitZero[i + 1].length),
          sum(splitZero[i + 1], splitZero[i][0] + 1, splitZero[i + 1].length),
          sum(splitZero[i + 1], splitZero[i][1] + 1, splitZero[i + 1].length)
        )
      );
    }
  }
  return Math.max(...answer);
};
function sum(arr, start, limit) {
  if (arr.length === 1) return arr[0];
  let result = 1;
  for (let i = start; i < limit; i++) result *= arr[i];
  return result;
}
// 압도적으로 빠르고 깔끔하고 멋진 풀이 ...Discuss 보자마자 이해하고 안 보고 짰는데 왜 보기 전엔 방식이 안 떠오를까
var maxProduct = function (nums) {
  let answer = nums[0],
    prefix = 1,
    suffix = 1;
  for (let i = 0; i < nums.length; i++) {
    prefix *= nums[i];
    suffix *= nums[nums.length - 1 - i];
    answer = Math.max(answer, prefix, suffix);
    if (prefix === 0) prefix = 1;
    if (suffix === 0) suffix = 1;
  }
  return answer;
};
