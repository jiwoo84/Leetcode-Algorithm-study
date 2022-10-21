//2022.10.21.

// 15. 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
/* Example
    nums                output
    [-1,0,1,2,-1,-4]    [[-1,-1,2],[-1,0,1]]
    [0,1,1]             []
    [0,0,0]             [[0,0,0]]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/* Time Limit Exceeded at 308. case (length:3000)
var threeSum = function (nums) {
  const combi = [];
  const visited = new Array(nums.length).fill(false);
  combination(nums, visited, 0, 3, combi);
  return combi;
};
function combination(nums, visited, index, count, combi) {
  if (count === 0) {
    const num = nums.filter((_, i) => visited[i]);
    if (num[0] + num[1] + num[2] === 0) {
      const [a, b, c] = num.sort((a, b) => a - b);
      if (combi.some(([d, e, f]) => a === d && b === e && c === f)) return;
      combi.push(num);
    }
    return;
  }
  if (index === nums.length) return;
  visited[index] = true;
  combination(nums, visited, index + 1, count - 1, combi);
  visited[index] = false;
  combination(nums, visited, index + 1, count, combi);
}*/

/* Maximum call stack size exceeded at 308. case (length:3000)
var threeSum = function (nums) {
  return combination(nums);
};
function combination(nums, i = 0, j = 1, k = 2, answer = []) {
  if (i === nums.length - 2) return answer;
  if (j === nums.length - 1)
    return combination(nums, i + 1, i + 2, i + 3, answer);
  if (k === nums.length) return combination(nums, i, j + 1, j + 2, answer);
  if (nums[i] + nums[j] + nums[k] === 0) {
    const combi = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
    if (
      !answer.some(
        (arr) =>
          arr[0] === combi[0] && arr[1] === combi[1] && arr[2] === combi[2]
      )
    )
      answer.push(combi);
  }
  return combination(nums, i, j, k + 1, answer);
}*/

// Runtime은 5% 빠른 정도로 무지 느리지만
// Memory Usage는 49.9MB로 99.68% 적다 ...콜스택 터트려봐서 그런가
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  if (nums[0] >= 0 || nums.at(-1) <= 0) {
    if (
      nums[0] + nums[1] + nums[2] === 0 ||
      nums.at(-1) + nums.at(-2) + nums.at(-3) === 0
    )
      return [[0, 0, 0]];
    return [];
  }
  const answer = [];
  for (let i = 0; nums[i] <= 0; i++) {
    if (nums[i] === 0) {
      if (nums[i + 1] === 0 && nums[i + 2] === 0) answer.push([0, 0, 0]);
      break;
    }
    if (nums[i] === nums[i - 1]) continue;
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      if (answer.length) {
        const [I, J, K] = answer[answer.length - 1];
        if (I === nums[i] && J === nums[j] && K === nums[k]) {
          j++, k--;
          continue;
        }
      }
      const sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j++;
        k = nums.length - 1;
      } else if (sum === 0) {
        answer.push([nums[i], nums[j], nums[k]]);
        j++;
        k = nums.length - 1;
      } else k--;
    }
  }
  return answer;
};
// Discuss를 참고해서 위 코드의 while문을 정리했더니 40배 빠른 런타임이 나왔다. 메모리는 3메가 더 사용됐다.
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  if (nums[0] >= 0 || nums.at(-1) <= 0) {
    if (
      nums[0] + nums[1] + nums[2] === 0 ||
      nums.at(-1) + nums.at(-2) + nums.at(-3) === 0
    )
      return [[0, 0, 0]];
    return [];
  }
  const answer = [];
  for (let i = 0; nums[i] <= 0; i++) {
    if (nums[i] === 0) {
      if (nums[i + 1] === 0 && nums[i + 2] === 0) answer.push([0, 0, 0]);
      break;
    }
    if (nums[i] === nums[i - 1]) continue;
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        answer.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      } else if (sum < 0) j++;
      else k--;
    }
  }
  return answer;
};
