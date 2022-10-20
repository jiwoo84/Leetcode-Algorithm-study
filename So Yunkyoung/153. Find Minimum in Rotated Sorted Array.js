/**
 * 153. Find Minimum in Rotated Sorted Array
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/submissions/
 * @param {number[]} nums
 * @return {number}
 * [a[0], a[1], a[2], ..., a[n-1]] 배열은 한번의 rotating 후에
 * [a[n-1], a[0], a[1], a[2], ..., a[n-2]]이 됨. 
 * => nums = [0,1,2,4,5,6,7]은 4번의 회전후엔 [4,5,6,7,0,1,2]
 *                              7번의 회전 후엔 [0,1,2,4,5,6,7]
 * nums는 모두 unique한 요소로 구성되어 있으며 minimum 값을 return.
 * O(log n) time.
 * 풀어보니 그냥 이진탐색문제였음.
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] > nums[r]) l = m + 1;
        else r = m;
    }
    return nums[l];
};
