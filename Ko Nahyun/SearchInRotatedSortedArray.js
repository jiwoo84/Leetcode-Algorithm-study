/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
 
    let start = 0;
    let end = nums.length-1;
    let mid = 0;
    
    while(start <= end){
        mid = Math.floor((start + end) / 2);

        if(nums[mid] === target) return mid;
        
        // mid 값이 pivot을 기준으로 어느 쪽에 있는 지를 기준으로 함.
        if(nums[mid] >= nums[start]){ // mid 값이 좌측 정렬 속에 포함된 경우
            if(nums[mid] > target  && target >= nums[start]){
                end = mid - 1;
            }else {
                start = mid + 1;
            }
        }
        if(nums[mid] <= nums[end]){ // mid 값이 우측 정렬 속에 포함 된 경우
            if(nums[mid] < target && target <= nums[end]) {
                start = mid + 1;
            }else {
                end = mid - 1;
            }
        }
    }
    return -1;
};

