/**
 * @param {number[]} nums
 * @return {number}
 * 인접한 집을 털지 않을 때 최대 금액 리턴
 * Input: nums = [1,2,3,1]
 * Output: 4 // 0,2번 째 집을 털어서 1+3 = 4
 * Input: nums = [2,7,9,3,1]
 * Output: 12 // 2+9+1
 */
// dp로 푸는 방법은 아직 익숙하지 않고 무슨 값을 넣어야할지 몰라 직관적으로 값을 만들어서 품
var rob = function(nums) {
    let result = 0;
    let prev = 0; let prevprev = 0;
    nums.forEach((elem) => {
        prev = result;
        result = Math.max(prevprev + elem, prev);
        prevprev = prev;
    });
    return result;
};
