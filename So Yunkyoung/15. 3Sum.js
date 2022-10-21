/**
 * 15. 3Sum
 * https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 * nums중에 nums[i] + nums[j] + nums[k] == 0가 되는 subArray 찾기
 * 
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 */

var threeSum = function(nums) {
    const answer = [];
    if (nums.length < 3) return answer; 
    nums.sort((a, b) => a - b); // -4, -1, -1, 0, 1, 2
    // i = -4 -> -1 -> -1 -> 0
    // nums.length - 2로 해야 low, high사 겹치지 않고 한개의 set이 만들어짐.
    for(let i = 0; i < nums.length - 2; i++){
        if(i > 0 && nums[i-1] === nums[i]) continue; // -1, -1과 같이 기준값이 겹치게 되는 걸 방지하기 위해
        let low = i + 1;
        let high = nums.length - 1;
        while (low < high){
            if (nums[i] + nums[low] + nums[high] === 0) {
                answer.push([nums[i], nums[low], nums[high]]);
                low++;
                high--;
                // nums = [-2,0,0,2,2]일 경우
                // 이 while문을 하지 않으면 [[-2,0,2],[-2,0,2]] 같은 결과가 두개 들어가게 됨.. 중복 피하기 위한 반복문
                // 원래는 if면 될 줄 알았는데 while로 해야됨... 연속된 값이 2개 이상 있을 수도 있으니까.
                while(nums[low - 1] === nums[low]) low++;
                while(nums[high] === nums[high + 1]) high--;
            }
            else if (nums[i] + nums[low] + nums[high] > 0) {
                high--;
            }
            else {
                low++;
            }
        }
        
    }
    return answer;
};
console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([-2,0,0,2,2]));
console.log(threeSum([-2,0,3,-1,4,0,3,4,1,1,1,-3,-5,4,0]));
