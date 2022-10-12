/**
 * @param {number[]} nums
 * @return {boolean}
 * 중복된 값이 배열에 있다면 true, 모든 값이 다르다면 false
 * ex1)
 * Input: nums = [1,2,3,1]
 * Output: true
 * ex2)
 * Input: nums = [1,2,3,4]
 * Output: false
 */
 var containsDuplicate = function(nums) {
    // 중복된 값을 지우고 만약 기존 배열과 크기가 같다면 false 아니면 true
    let temp = [...new Set(nums)];
    // Set은 유니크한 값만을 담을 수 있기 때문에 배열을 Set 형태로 만들어 중복을 제거하고, 
    // 다시 배열 안에 spread 를 사용하여 새로운 배열 만들기
    // let temp = Array.from(new Set(nums)); 도 가능
    if(temp.length == nums.length) return false;
    else return true;
};
