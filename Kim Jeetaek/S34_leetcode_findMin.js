//2022.10.19.

// 153. Find Minimum in Rotated Sorted Array
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
//     [4,5,6,7,0,1,2] if it was rotated 4 times.
//     [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
// You must write an algorithm that runs in O(log n) time.
/* Example
    nums                output
    [3,4,5,1,2]         1
    [4,5,6,7,0,1,2]     0
    [11,13,15,17]       11
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  return Math.min(...nums); // for문 한 번만 돌리기에 O(n) - 문제에서 요구하는 것보다 효율적이다
};
var findMin = function (nums) {
  return nums.sort((a, b) => a - b)[0]; // sort()는 O(n log n) - 문제에서 요구하는 것보다 복잡하다
};
var findMin = function (nums) {
  // 반씩 쪼개서 보는 이진트리는 O(log n) - 어째 sort()보다 런타임이 느리게 나왔다
  let min = Number.MAX_SAFE_INTEGER,
    left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (min > nums[mid]) min = nums[mid];
    if (nums[right] < min) left = mid + 1;
    else right = mid - 1;
  }
  return min;
};
// Discuss 참고 - 정렬된 배열인 것을 감안해서 조건문을 추가해줘야 압도적으로 빠른 런타임이 나온다
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) return nums[mid + 1]; // 타겟보다 하나 뒤에 있는 게 더 작으면 그게 원 배열의 시작점이다
    if (nums[mid - 1] > nums[mid]) return nums[mid]; // 위와 같은 이유로, 타겟이 원 배열의 시작점인지 확인
    if (nums[right] < nums[mid]) left = mid + 1;
    else right = mid - 1;
  }
  return nums[left]; // 변수 min이 굳이 필요하지 않다
};
