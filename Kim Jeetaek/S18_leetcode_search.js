//2022.09.26~27.

// 33. Search in Rotated Sorted Array
// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.
/* Example
    nums                target  output
    [4,5,6,7,0,1,2]     0       4
    [4,5,6,7,0,1,2]     3       -1
    [1]                 0       -1
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/* target이 nums에 없다면 처음부터 끝까지 탐색하기 때문에 indexOf()의 시간복잡도는 O(n)이다.
var search = function (nums, target) {
  return nums.indexOf(target);
};*/
var search = function (nums, target) {
  // 이진 트리? 반쪽의 반쪽의 반쪽...을 탐색하는 걸 찾아서 써봤는데 뭘 잘못했나, 아님 테스트케이스가 단순한 건가
  // 런타임이 indexOf()의 두 배 가까이 나왔다
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let pivot = Math.floor((left + right) / 2);
    if (nums[pivot] == target) return pivot;
    if (nums[left] <= nums[pivot]) {
      if (nums[left] <= target && nums[pivot] > target) right = pivot - 1;
      else left = pivot + 1;
    } else {
      if (nums[right] >= target && nums[pivot] < target) left = pivot + 1;
      else right = pivot - 1;
    }
  }
  return -1;
};
